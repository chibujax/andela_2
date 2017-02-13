(function() {
  'use strict';
  var datatypeslab = require("../app/DataTypesLab/library.js");
  var getPrimesLab = require('../app/getprimes/library.js');
  var gsm = require('../app/OOP/library.js');


  //var geo = require("../app/arit_geo/arit.js");

  describe("Data types tests ", function() {
    describe("Case for some falsy values", function() {

      it("should return 'no value' for null", function() {
        expect(datatypeslab.dataTypes(null)).toEqual('no value');
      });

      it("should return 'no value' for undefined", function() {
        expect(datatypeslab.dataTypes(undefined)).toEqual('no value');
      });

    });

    describe("Case for booleans", function() {

      it("should return true for `true`", function() {
        expect(datatypeslab.dataTypes(true)).toBe(true);
      });

      it("should return false for `false`", function() {
        expect(datatypeslab.dataTypes(false)).toBe(false);
      });

    });

    describe("Case for Numbers", function() {

      it("should return 'less than 100' for 44", function() {
        expect(datatypeslab.dataTypes(44)).toBe('less than 100');
      });

      it("should return 'more than 100' for 144", function() {
        expect(datatypeslab.dataTypes(144)).toBe('more than 100');
      });

      it("should return 'equal to 100' for 100", function() {
        expect(datatypeslab.dataTypes(100)).toBe('equal to 100');
      });


    });

    describe("Case for Strings", function() {

      it("should return the length of `tergiversate`", function() {
        expect(datatypeslab.dataTypes('tergiversate')).toBe(12);
      });

      it("should return the length of an empty string", function() {
        expect(datatypeslab.dataTypes('')).toBe(0);
      });

      it("should return the length of `555`", function() {
        expect(datatypeslab.dataTypes('555')).toBe(3);
      });

    });

    describe("Case for arrays", function() {

      it("should return `2` for `[0, 1, 2]`", function() {
        expect(datatypeslab.dataTypes([0, 1, 2])).toBe(2);
      });

      it("should return `undefined` for `[]`", function() {
        expect(datatypeslab.dataTypes([])).not.toBeDefined();
      });
      it("should return `undefined` for `[4, 9]`", function() {
        expect(datatypeslab.dataTypes([4, 9])).not.toBeDefined();
      });
    });

    describe("Case for functions", function() {
      it("should call the `callback` function with argument true, and return `called callback`", function() {
        var callback = function(arg) {
          expect(arg).toBeTruthy();
          if(arg === true) {
            return 'called callback';
          }
        };
        expect(datatypeslab.dataTypes(callback)).toBe('called callback');
      });
    });
  });


  describe("Test cases for getPrimes function", function() {
      it("should return 'negative integers can not be prime' for negative integers", function() {
        expect(getPrimesLab.getPrimes(-23)).toEqual("negative integers can not be prime");
      });
    
      it("should return 'Must be a number' for NaN", function() {
        expect(getPrimesLab.getPrimes('cha')).toEqual("Must be a number");
      });   
    
      it("should return '0 can not be prime' for 0", function() {
        expect(getPrimesLab.getPrimes(0)).toEqual("0 cannot be prime");
      });   

      it("should return an empty array if argument is equal to 1", function() {
        expect(getPrimesLab.getPrimes(1)[0]).toBeUndefined();
      });

      it("should return [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ] if argument is equal to 29", function() {
        expect(getPrimesLab.getPrimes(29)).toEqual([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29 ]);
      });

      it("should return an [2,3] if the argument passed is equal to 4", function() {
        expect(getPrimesLab.getPrimes(4)).toEqual([ 2, 3 ]);
      });

      it("should return an [2,3,5,7] if the argument passed is equal to 7", function() {
        expect(getPrimesLab.getPrimes(7)).toEqual([ 2, 3, 5, 7 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11 ] if the argument passed is equal to 12", function() {
        expect(getPrimesLab.getPrimes(12)).toEqual([ 2, 3, 5, 7, 11 ]);
      });

      it("should return an [ 2, 3, 5, 7, 11, 13, 17, 19 ] if the argument passed is equal to 20", function() {
        expect(getPrimesLab.getPrimes(12)).toEqual([ 2, 3, 5, 7, 11 ]);
      });

      it("should return the equivalent of getPrimes(29) if the argument passed is equal to getPrimes(30)", function() {
        expect(getPrimesLab.getPrimes(30)).toEqual(getPrimesLab.getPrimes(29));
      });

      it("should return an [ 2 ] if the argument passed is equal to 2", function() {
        expect(getPrimesLab.getPrimes(2)).toEqual([ 2 ]);
      });

      it("should return an [ 2, 3 ] if the argument passed is equal to 3", function() {
        expect(getPrimesLab.getPrimes(3)).toEqual([ 2, 3 ]);
      });
    
  });

  describe("Phone Class: Create a Phone, make it charge", function() {

    it("The phone should be a type of `object`, and an instance of the `Phone` class", function() {
      var tecno = new gsm.Phone('Tecno');
      expect(typeof tecno).toEqual(typeof {});
      expect(tecno instanceof gsm.Phone).toBeTruthy();
    });

    it("The Phone should be called 'General' if no name is passed as a parameter", function() {
      var gm = new gsm.Phone();
      expect(gm.name).toBe('General');
      expect(gm.model).toBe('Mobile');
    });

    it("The phone name and model should be a property of the Phone", function() {
      var Infinix  = new gsm.Phone('Infinix', 'S4');
      expect(Infinix.name).toBe('Infinix');
      expect(Infinix.model).toBe('S4');
    });

    it("The Phone should be able to charge and stop charging", function() {
      var Infinix  = new gsm.Phone('Infinix', 'S4');
      expect(Infinix.isCharging).toBe(false);
      Infinix.charge();
      expect(Infinix.isCharging).toBe(true);
      Infinix.stopCharge();
      expect(Infinix.isCharging).toBe(false);
    });

    it("The phone should be powered off by default until powered on", function() {
      var iPhone  = new gsm.Phone('iPhone', 'iPhone 5c', "iOS");
      expect(iPhone.isPowerOn).toBe(false);
      expect(iPhone.isAndroid).not.toBeTruthy();
      expect(iPhone.isIphone).toBeTruthy();
      iPhone.powerOn();
      expect(iPhone.isPowerOn).toBeTruthy();
      iPhone.powerOff();
      expect(iPhone.isPowerOn).not.toBeTruthy();
    });    

    it("The phone should know the difference between iPhone and MTK devices ", function() {
      var nokia  = new gsm.Phone('Nokia', 'c4','Unknonw');
      var samsung  = new gsm.Phone('Samsung', 'S3', 'Android');
      var iphone  = new gsm.Phone('iPhone', 'i7', 'iOS');
      expect(nokia.doubleSim).toBe(false);
      expect(nokia.isAndroid).toBe(false);
      expect(samsung.isAndroid).toBe(true);
      expect(iphone.isIphone).toBe(true);
    });

  });


})();