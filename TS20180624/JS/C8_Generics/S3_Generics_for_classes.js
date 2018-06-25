"use strict";
var GenericNumber = /** @class */ (function () {
    function GenericNumber(zeroValue, add) {
        this.zeroValue = zeroValue;
        this.add = add;
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUzNfR2VuZXJpY3NfZm9yX2NsYXNzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9DOF9HZW5lcmljcy9TM19HZW5lcmljc19mb3JfY2xhc3Nlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFDSSx1QkFBbUIsU0FBYSxFQUFTLEdBQXVCO1FBQTdDLGNBQVMsR0FBVCxTQUFTLENBQUk7UUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFvQjtJQUFHLENBQUM7SUFDeEUsb0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVELElBQUksZUFBZSxHQUFHLElBQUksYUFBYSxFQUFVLENBQUM7QUFDbEQsZUFBZSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7QUFDOUIsZUFBZSxDQUFDLEdBQUcsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXZELElBQUksYUFBYSxHQUFHLElBQUksYUFBYSxFQUFVLENBQUM7QUFDaEQsYUFBYSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDN0IsYUFBYSxDQUFDLEdBQUcsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMifQ==