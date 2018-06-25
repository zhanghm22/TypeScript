"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./Calculator");
var ProgrammerCalculator = /** @class */ (function (_super) {
    __extends(ProgrammerCalculator, _super);
    function ProgrammerCalculator(base) {
        var _this = _super.call(this) || this;
        _this.base = base;
        var maxBase = ProgrammerCalculator.digits.length;
        if (base <= 0 || base > maxBase) {
            throw new Error("base has to be within 0 to " + maxBase + " inclusive.");
        }
        return _this;
    }
    ProgrammerCalculator.prototype.processDigit = function (digit, currentValue) {
        if (ProgrammerCalculator.digits.indexOf(digit) >= 0) {
            return currentValue * this.base + ProgrammerCalculator.digits.indexOf(digit);
        }
    };
    ProgrammerCalculator.digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    return ProgrammerCalculator;
}(Calculator_1.Calculator));
exports.Calculator = ProgrammerCalculator;
// Also, export the helper function
var Calculator_2 = require("./Calculator");
exports.test = Calculator_2.test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3JhbW1lckNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9DNl9TaW1wbGVFeGFtcGxlXzIvUHJvZ3JhbW1lckNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTBDO0FBRTFDO0lBQW1DLHdDQUFVO0lBR3pDLDhCQUFtQixJQUFZO1FBQS9CLFlBQ0ksaUJBQU8sU0FLVjtRQU5rQixVQUFJLEdBQUosSUFBSSxDQUFRO1FBRTNCLElBQU0sT0FBTyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbkQsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxPQUFPLEVBQUU7WUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBOEIsT0FBTyxnQkFBYSxDQUFDLENBQUM7U0FDdkU7O0lBQ0wsQ0FBQztJQUVTLDJDQUFZLEdBQXRCLFVBQXVCLEtBQWEsRUFBRSxZQUFvQjtRQUN0RCxJQUFJLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pELE9BQU8sWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRjtJQUNMLENBQUM7SUFkTSwyQkFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFlckcsMkJBQUM7Q0FBQSxBQWhCRCxDQUFtQyx1QkFBVSxHQWdCNUM7QUFHZ0MsMENBQVU7QUFFM0MsbUNBQW1DO0FBQ25DLDJDQUFvQztBQUEzQiw0QkFBQSxJQUFJLENBQUEifQ==