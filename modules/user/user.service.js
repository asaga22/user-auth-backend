const Validator = require('fastest-validator');
const validator = new Validator();
const bcrypt = require('bcrypt');
let RequestResponse = require('../../models/custom/RequestResponse');
let UserRepository = require('./user.repository');
const { User } = require('../../models');
const jwt = require('jsonwebtoken');

/**
 * CREATE User 
 * @param {*} params 
 * @returns 
 */
async function createUser(params) {

    // response object
    let requestResponse = new RequestResponse(process.env.INTERNAL_ERROR, false, null, null);


    // VALIDATE REQUEST PARAM
    const schema = {
        email: 'email',
        username: { type: "string", min: 2 },
        password: { type: "string", min: 5 },
        confirmPassword: { type: "equal", field: "password" },
        fullname: 'string',
    }

    const validate = validator.validate(params, schema);

    if(validate.length > 0) {
        requestResponse = new RequestResponse(process.env.RESPONSE_BAD_REQUEST, false, "invalid data", validate);
        return requestResponse;
    }


    // VALIDATE if email already exist
    let foundUsers = await UserRepository.retrieveUser({email: params.email});
    if (foundUsers.length > 0) {
        requestResponse = new RequestResponse(process.env.RESPONSE_CONFLICT, false, "User with given email is already exist", params);
        return requestResponse;
    }


    // VALIDATE if username already exist
    foundUsers = await UserRepository.retrieveUser({username: params.username});
    if (foundUsers.length > 0) {
        requestResponse = new RequestResponse(process.env.RESPONSE_CONFLICT, false, "User with given username is already exist", params);
        return requestResponse;
    }


    // Hash given password
    params.password = await bcrypt.hash(params.password, 13);


    await UserRepository.createUser(params);

    requestResponse = new RequestResponse(process.env.RESPONSE_SUCCESS, true, "successfully created", displayableUserData(params));

    return requestResponse;

}


/**
 * Authenticate user
 * @param {*} params 
 * @returns 
 */
async function authenticateUser(params) {
    // response object
    let requestResponse = new RequestResponse(process.env.RESPONSE_BAD_REQUEST, false, null, null);

    console.log("params: %o", params);


    // VALIDATE REQUEST PARAM
    const schema = {
        email: 'email|optional',
        username: 'string|optional',
        password: { type: "string", min: 5 },
    }

    // validate
    const validate = validator.validate(params, schema);
    if(validate.length > 0) {
        requestResponse = new RequestResponse(process.env.RESPONSE_BAD_REQUEST, false, "invalid data", validate);
        return requestResponse;
    }


    // get user by email
    let foundUsers = await UserRepository.retrieveUser({"email": params.email});
    if (foundUsers.length < 1) {

        // get user by email
        foundUsers = await UserRepository.retrieveUser({"username": params.username});

        if (foundUsers.length < 1) {
            // Generate signup token
            const fullname = params.fullname;
            const username = params.username;
            const email = params.email;

            const signUptoken = jwt.sign({fullname, username, email}, process.env.ACCESS_TOKEN_SECRET);
            params.signUpToken = signUptoken;
            requestResponse = new RequestResponse(process.env.RESPONSE_SUCCESS, 
                true, 
                "User with given email is not found, therefore sign up instead", 
                params
            );
            return requestResponse;
        }
        
    }
    let user = foundUsers[0];


    // Check if given password is match with the one stored in DB
    const match = await bcrypt.compare(params.password, user.password);
    console.log("mathc is "+match);
    if(!match) {
        requestResponse = new RequestResponse(process.env.RESPONSE_BAD_REQUEST, false, "Authentication failed, password incorrect", null);
        return requestResponse;
    }


    // Generate access token
    const id = user.id;
    const fullname = user.fullname;
    const username = user.username;
    const email = user.email;
    

    const accessToken = jwt.sign({id, fullname, username, email}, process.env.ACCESS_TOKEN_SECRET);

    await User.update({access_token: accessToken}, {
        where:{
            id: id
        }
    });

    let displayableUser = displayableUserData(user);
    displayableUser["accessToken"] = accessToken;
    requestResponse = new RequestResponse(process.env.RESPONSE_SUCCESS, true, "Authentication successful!", displayableUser);

    return requestResponse;
}


async function retrieveUsers(params) {

    // response object
    let requestResponse = new RequestResponse(process.env.INTERNAL_ERROR, false, null, null);
    

    try {
        params.limit = parseInt(params.limit);
        params.offset = parseInt(params.offset);
    } catch(error) {
        console.log(error);
    }


    // VALIDATE REQUEST PARAM
    const schema = {
        email: 'string|optional',
        fullname: 'string|optional',
        username: 'string|optional',
        limit: {type: "number", positive: true, min:1, max:500},
        offset: {type: "number"},
        order: 'string|optional'
    }

    const validate = validator.validate(params, schema);

    if(validate.length > 0) {
        requestResponse = new RequestResponse(process.env.RESPONSE_BAD_REQUEST, false, "invalid data", validate);
        return requestResponse;
    }

    // retrieve users
    const users = await UserRepository.retrieveUser(params);
    requestResponse = new RequestResponse(process.env.RESPONSE_SUCCESS, true, "User data is successfully retrieved!", users);

    return requestResponse;
}

displayableUserData = (object) => {
    const { fullname, email, username, is_activate, created_at, updated_at } = object;
    return { fullname, email, username, is_activate, created_at, updated_at };
}

module.exports = {
    createUser,
    retrieveUsers,
    authenticateUser
}
