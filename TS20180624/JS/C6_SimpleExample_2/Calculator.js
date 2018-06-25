"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
        this.current = 0;
        this.memory = 0;
        this.operator = "";
    }
    Calculator.prototype.processDigit = function (digit, currentValue) {
        if (digit >= "0" && digit <= "9") {
            return currentValue * 10 + (digit.charCodeAt(0) - "0".charCodeAt(0));
        }
    };
    Calculator.prototype.processOperator = function (operator) {
        if (["+", "-", "*", "/"].indexOf(operator) >= 0) {
            return operator;
        }
    };
    Calculator.prototype.evaluateOperator = function (operator, left, right) {
        switch (this.operator) {
            case "+": return left + right;
            case "-": return left - right;
            case "*": return left * right;
            case "/": return left / right;
            default: return 0;
        }
    };
    Calculator.prototype.evaluate = function () {
        if (this.operator) {
            this.memory = this.evaluateOperator(this.operator, this.memory, this.current);
        }
        else {
            this.memory = this.current;
        }
        this.current = 0;
    };
    Calculator.prototype.handleChar = function (char) {
        if (char === "=") {
            this.evaluate();
            return;
        }
        else {
            var value = this.processDigit(char, this.current);
            if (value !== undefined) {
                this.current = value;
                return;
            }
            else {
                var value_1 = this.processOperator(char);
                if (value_1 !== undefined) {
                    this.evaluate();
                    this.operator = value_1;
                    return;
                }
            }
        }
        throw new Error("Unsupported input: '" + char + "'");
    };
    Calculator.prototype.getResult = function () {
        return this.memory;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
function test(c, input) {
    for (var i = 0; i < input.length; i++) {
        c.handleChar(input[i]);
    }
    console.log("result of '" + input + "' is '" + c.getResult() + "'");
}
exports.test = test;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0M2X1NpbXBsZUV4YW1wbGVfMi9DYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtRQUNZLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQTREbEMsQ0FBQztJQTFEYSxpQ0FBWSxHQUF0QixVQUF1QixLQUFhLEVBQUUsWUFBb0I7UUFDdEQsSUFBSSxLQUFLLElBQUksR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDOUIsT0FBTyxZQUFZLEdBQUcsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEU7SUFDTCxDQUFDO0lBRVMsb0NBQWUsR0FBekIsVUFBMEIsUUFBZ0I7UUFDdEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsT0FBTyxRQUFRLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBRVMscUNBQWdCLEdBQTFCLFVBQTJCLFFBQWdCLEVBQUUsSUFBWSxFQUFFLEtBQWE7UUFDcEUsUUFBUSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ25CLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUcsS0FBSyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUVPLDZCQUFRLEdBQWhCO1FBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqRjthQUNJO1lBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU87U0FDVjthQUNJO1lBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE9BQU87YUFDVjtpQkFDSTtnQkFDRCxJQUFJLE9BQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLE9BQUssS0FBSyxTQUFTLEVBQUU7b0JBQ3JCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFLLENBQUM7b0JBQ3RCLE9BQU87aUJBQ1Y7YUFDSjtTQUNKO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBdUIsSUFBSSxNQUFHLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sOEJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUNMLGlCQUFDO0FBQUQsQ0FBQyxBQS9ERCxJQStEQztBQS9EWSxnQ0FBVTtBQWlFdkIsY0FBcUIsQ0FBYSxFQUFFLEtBQWE7SUFDN0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxQjtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWMsS0FBSyxjQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsTUFBRyxDQUFDLENBQUM7QUFDOUQsQ0FBQztBQU5ELG9CQU1DIn0=