// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//create an empty string to store the result strigified
//if number/boolean/null: return as is
//if a string add "" around the string on the inside
//if array: add '' around []
  //use for loop to iterate through array and recurese through to stringify everything in array
//if object: add '' around {}
  //use for in to make the key a string and recurse through to stringify everything
//if undefined/function/symbol:
  //object: omit
  //array: null

var stringifyJSON = function(obj) {
  // your code goes here
  var stringified = '';
  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
    stringified += obj;
  }
  if (typeof obj === 'string') {
    stringified += `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    stringified += '[';
    if (obj.length === 0) {
      return stringified += ']';
    } else {
      for (let i = 0; i < obj.length -1; i++) {
        stringified += stringifyJSON(obj[i]) + ',';
      }
      stringified += stringifyJSON(obj[obj.length - 1]);
    }
    return stringified += ']';
  }
  if (typeof obj === 'object' && obj !== null) {
    stringified += '{';
    for (key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        return '{}';
      }
        stringified += `"${key}":${stringifyJSON(obj[key])},`;
    }
      if(stringified.length !== 1) {
        stringified = stringified.slice(0, stringified.length -1)
      }
    stringified += '}';
  }
  return stringified;
};


