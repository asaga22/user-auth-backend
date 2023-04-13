const jwt = require("jsonwebtoken");
const RequestResponse = require('../models/custom/RequestResponse');
const UserRepository = require('../modules/user/user.repository');


const verifyToken = (req, res, next) => {

    const requestResponse = new RequestResponse(null, false, null, null);
    const authHeader = req.headers['authorization'];

    //splitting between token and barrier by space
    const token = authHeader && authHeader.split(' ')[1];


    /**
     * if no token submitted
     */
    if(token == null) {
        
        requestResponse.setCode(process.env.RESPONSE_UNAUTHORIZED);
        requestResponse.setMessage("Unauthorized request, no token found!");

        return res.status(requestResponse.code)
            .json(requestResponse);
    }
    console.log("ACCESS TOKEN IS: "+token);


    /**
     * Validate token
     */
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {

        // if token invalid
        if(err) {
            console.log("jwtVerify: error: %o", err);
            requestResponse.setCode(process.env.RESPONSE_FORBIDDEN);
            requestResponse.setMessage("Forbidden request, token invalid!");
            return res.status(requestResponse.code)
                .json(requestResponse);
        }


        /**
         * Check if validated token is matched with the stored one in the database
         */
        UserRepository.retrieveUser({"access_token" : token})
            .then(user => {

                if (user.length < 1) {
                    requestResponse.setCode(process.env.RESPONSE_FORBIDDEN);
                    requestResponse.setMessage("Token is not matched! Please sign in again!");
                    return res.status(requestResponse.code)
                        .json(requestResponse);
                }

                next();
            })
            .catch(err => 
                console.error(err.message)
            );
    });

}

module.exports = verifyToken;