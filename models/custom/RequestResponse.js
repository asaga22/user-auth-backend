const Helper = require('../../utils/Helper');
let code = null;
let success = true;
let message = null;
let data = null;

class RequestResponse {


    constructor(codeParam, successParam, messageParam, dataParam) {
       this.code = codeParam; 
       this.success = successParam;
       this.message = messageParam;

       this.data = Helper.objectToB64String(dataParam);
    }


    setCode(code) {
        this.code = code;
    }

    setSuccess(success) {
        this.success = success;
    }

    setMessage(message) {
        this.message = message;
    } 

    setData(data) {
        this.data = Helper.objectToB64String(data);
    }

}

module.exports = RequestResponse;