"use strict";
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGV0dGVyc09ubHlWYWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9DN19OYW1lc3BhY2VzL0xldHRlcnNPbmx5VmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBc0M7QUFDdEMsSUFBVSxVQUFVLENBT25CO0FBUEQsV0FBVSxVQUFVO0lBQ2hCLElBQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNwQztRQUFBO1FBSUEsQ0FBQztRQUhHLDJDQUFZLEdBQVosVUFBYSxDQUFTO1lBQ2xCLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0wsMkJBQUM7SUFBRCxDQUFDLEFBSkQsSUFJQztJQUpZLCtCQUFvQix1QkFJaEMsQ0FBQTtBQUNMLENBQUMsRUFQUyxVQUFVLEtBQVYsVUFBVSxRQU9uQiJ9