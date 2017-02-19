'use strict'

module.exports = {
  getPrimes: function (num) {
    var primes = [2,3];
    var empty_a = [];
    var checkPrime = function(n) {
      if (n < 2) return false;
      //An integer is prime if it is not divisible by any prime less than or equal to its square root

      var q = Math.floor(Math.sqrt(n));  //Faster than total loop

      for (var i = 2; i <= q; i++) {
          if (n % i == 0)
          {
              return false;
          }
      }

      return true;
    }
    if(num == 0){
      return "0 cannot be prime";
    }
    var real_num = parseInt(num)
    if (!real_num){
      return 'Must be a number';
    }
    
    if (num < 0) {
      return "negative integers can not be prime";
    }
    else if (num === 1) {
      return empty_a;  
    }
    else if (num === 2) {
      return [2];
    }
    else if (num === 3) {
      return primes;
    }
    else {
      for(var i = 4; i <= num; i++) {
            if(checkPrime(i) === true ){
                primes.push(i);
            }
      }
      return primes;
    }
  }

}