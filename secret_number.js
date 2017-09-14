// 'use strict';
module.exports = function() {
   var secretNumber = (Math.floor(Math.random() * 1000000 + 1)); //generates a random number between 0 and 1000000
  return function(){ //call the anonymous function once
    return secretNumber; //returns the random number generated in the above call
  };
};

};