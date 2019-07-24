module.exports = function(fnWithCallback) {
  if (typeof fnWithCallback !== 'function') {
    throw new Error('expecting function with a callback');
  }
 
  return function(...newArgs) {
    return new Promise( (resolve, reject) => {
      fnWithCallback(...newArgs, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }
}

