const { User } = require('../../models');
const { Sequelize, Op } = require("sequelize");

/**
 * @param {*} params 
 * @returns boolean, TRUE if success, FALSE if fail
 */
const createUser = async(params) => {
    // create User object
    try {

        const user = new User(params);

        const currentDate = new Date();
        user.created_at = currentDate;
        user.updated_at = currentDate;
        user.is_activated = 0;

        user.save();

        return true;
    } catch(error) {
        console.log(error);
    }

    return false;

}


const retrieveUser = async(params) => {

    try {

        let {id, fullname, email, username, access_token, signup_token, limit, offset, order} = params;
        let condition = {};
        const baseQuery = {
            logging: true,
            attributes: ['id', 'fullname', 'email', 'username', 'password', 'access_token', 'signup_token', 'is_activated', 'created_at', 'updated_at'],
        };

        // assign conditional
        if ( id != null ) condition["id"] = id;
        if ( fullname != null ) condition["fullname"] = fullname;
        if ( email != null ) condition["email"] = email;
        if ( username != null ) condition["username"] = username;
        if ( access_token != null ) condition["access_token"] = access_token;
        if ( signup_token != null ) condition["signup_token"] = limit;
        baseQuery["where"] = condition;


        //assign data presentation condition
        if (limit != null) baseQuery["limit"] = limit;
        if (offset != null) baseQuery["offset"] = offset;
        if (order != null) {
            let splitted = order.split("_");
            baseQuery["order"] = [splitted[0], splitted[1]]
        }

        const users = await User.findAll(baseQuery);

        return users;
    } catch (error) {
        console.log("retrieveUser: "+error);
    }

    return [];
}


module.exports = {
    createUser,
    retrieveUser
}