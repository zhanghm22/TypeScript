"use strict";
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0M3X05hbWVzcGFjZXMvWmlwQ29kZVZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLElBQVUsVUFBVSxDQU9uQjtBQVBELFdBQVUsVUFBVTtJQUNoQixJQUFNLFlBQVksR0FBRyxVQUFVLENBQUM7SUFDaEM7UUFBQTtRQUlBLENBQUM7UUFIRyx1Q0FBWSxHQUFaLFVBQWEsQ0FBUztZQUNsQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNMLHVCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSwyQkFBZ0IsbUJBSTVCLENBQUE7QUFDTCxDQUFDLEVBUFMsVUFBVSxLQUFWLFVBQVUsUUFPbkIifQ==