"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Exporting a declaration(such as a variable, function, class, type alias, or interface)
exports.numberRegexp = /^[0-9]+$/;
//Export statements(be renamed for consumers)
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && exports.numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.mainValidator = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUzJfWmlwQ29kZVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0M2X01vZHVsZS9TMl9aaXBDb2RlVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0ZBQXdGO0FBQzNFLFFBQUEsWUFBWSxHQUFHLFVBQVUsQ0FBQztBQUV2Qyw2Q0FBNkM7QUFDN0M7SUFBQTtJQUlBLENBQUM7SUFIRyx1Q0FBWSxHQUFaLFVBQWEsQ0FBUztRQUNsQixPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLG9CQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBQzRCLHlDQUFhIn0=