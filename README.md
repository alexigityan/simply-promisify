# simply-promisify

## Usage

    /* in console */
    npm -i simply-promisify

    /* in js file */
    const promisify = require('simply-promisify');

    function oldCallbackFunction(a, b, callback) { 
        // do something...
        callback( null, data ); // in case of error first argument would be an Error object
    }

    const newPromisifiedFunction = promisify(oldCallbackFunction);

    newPromisifiedFunction(a, b) // arguments needed by original function except the callback
        .then ( data => console.log(data) ) // success
        .catch ( err => console.log(err) )  // error handling
