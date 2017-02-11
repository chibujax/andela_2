(function() {
  'use strict';
  var datatypeslab = require("../app/DataTypesLab/library.js");
  //var fizbuz = require("../app/fizz_buzz/fizzbuzz.js");
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
})();