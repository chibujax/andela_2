'use strict'

module.exports = {
 
  dataTypes: function(input) {
    if (typeof(input) === "string") {
      return input.length;
    }
    else if (typeof(input) === "boolean") {
      return input;
    }
    if (input instanceof Function) {
      return input(true);
    }
    else if (typeof(input) === "number") {
      if (input < 100) {
        return "less than 100";
      }
      else if (input === 100) {
        return "equal to 100";
      }
      else {
        return "more than 100";
      }
    }
    else if (Array.isArray(input) === true) {
      return input[2];
    }
    else {
      return "no value"
    }
  }

}