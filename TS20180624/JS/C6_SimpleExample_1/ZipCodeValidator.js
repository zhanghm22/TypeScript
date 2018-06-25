"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWmlwQ29kZVZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0M2X1NpbXBsZUV4YW1wbGVfMS9aaXBDb2RlVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBTSxZQUFZLEdBQUcsVUFBVSxDQUFDO0FBRWhDO0lBQUE7SUFJQSxDQUFDO0lBSEcsdUNBQVksR0FBWixVQUFhLENBQVM7UUFDbEIsT0FBTyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFKRCxJQUlDO0FBSlksNENBQWdCIn0=