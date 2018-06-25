"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Re-exports (use to extend other modules. A re-export does not import it locally, or introduce a local variable.)
var ParseIntBasedZipCodeValidator = /** @class */ (function () {
    function ParseIntBasedZipCodeValidator() {
    }
    ParseIntBasedZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && parseInt(s).toString() === s;
    };
    return ParseIntBasedZipCodeValidator;
}());
exports.ParseIntBasedZipCodeValidator = ParseIntBasedZipCodeValidator;
// Export original validator but rename it
var S2_ZipCodeValidator_1 = require("./S2_ZipCodeValidator");
exports.RegExpBasedZipCodeValidator = S2_ZipCodeValidator_1.mainValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUzNfUGFyc2VJbnRCYXNlZFppcENvZGVWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9DNl9Nb2R1bGUvUzNfUGFyc2VJbnRCYXNlZFppcENvZGVWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrSEFBa0g7QUFDbEg7SUFBQTtJQUlBLENBQUM7SUFIRyxvREFBWSxHQUFaLFVBQWEsQ0FBUztRQUNsQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUNMLG9DQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxzRUFBNkI7QUFNMUMsMENBQTBDO0FBQzFDLDZEQUFxRjtBQUE1RSw0REFBQSxhQUFhLENBQStCIn0=