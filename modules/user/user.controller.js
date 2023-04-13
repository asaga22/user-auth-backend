const userService = require('./user.service.js');
const Helper = require('../../utils/Helper.js');

function createUser(req, res, next) {

    userService.createUser(req.body)
        .then(requestResponse => {
            res.status(parseInt(requestResponse.code))
                .json(requestResponse);
        })
        .catch(next);
}


function authenticateUser(req, res, next) {

    userService.authenticateUser(req.body)
        .then(requestResponse => {

            if (requestResponse.code == 200) {

                let dataObject = Helper.b64StringToObject(requestResponse.data);

                if('accessToken' in dataObject) {

                    // set accessToken in cookie
                    res.cookie('accessToken', dataObject.accessToken, {
                        httpOnly: true
                    });
    
    
                    // removing accessToken property from requestResponse
                    delete dataObject["accessToken"];

                    requestResponse.data = Helper.objectToB64String(dataObject);
                }
            }

            res.status(parseInt(requestResponse.code))
                .json(requestResponse);
        })
        .catch(next);
}


function retrieveUsers(req, res, next) {

    userService.retrieveUsers(req.query)
        .then(requestResponse => {
            res.status(parseInt(requestResponse.code))
                .json(requestResponse);
        })
        .catch(next);
}


module.exports = {
    createUser,
    retrieveUsers,
    authenticateUser
}