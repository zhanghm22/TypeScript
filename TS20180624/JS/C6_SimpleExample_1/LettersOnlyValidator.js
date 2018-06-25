"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lettersRegexp = /^[A-Za-z]+$/;
var LettersOnlyValidator = /** @class */ (function () {
    function LettersOnlyValidator() {
    }
    LettersOnlyValidator.prototype.isAcceptable = function (s) {
        return lettersRegexp.test(s);
    };
    return LettersOnlyValidator;
}());
exports.LettersOnlyValidator = LettersOnlyValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV0dGVyc09ubHlWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9DNl9TaW1wbGVFeGFtcGxlXzEvTGV0dGVyc09ubHlWYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFNLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFFcEM7SUFBQTtJQUlBLENBQUM7SUFIRywyQ0FBWSxHQUFaLFVBQWEsQ0FBUztRQUNsQixPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSxvREFBb0IifQ==