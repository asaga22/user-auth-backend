objectToB64String = (dataObject) => {
    // convert object to string using JSON.stringify()
   const stringifyData = JSON.stringify(dataObject);

    // convert string to base64
   return Buffer.from(stringifyData).toString('base64');
}

b64StringToObject = (b64String) => {

   const stringobject = Buffer.from(b64String, 'base64');
   return JSON.parse(stringobject);
}

module.exports = {
    objectToB64String,
    b64StringToObject
}