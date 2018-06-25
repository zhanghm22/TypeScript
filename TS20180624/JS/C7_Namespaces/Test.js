"use strict";
/// <reference path="Validation.ts" />
/// <reference path="LettersOnlyValidator.ts" />
/// <reference path="ZipCodeValidator.ts" />
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0M3X05hbWVzcGFjZXMvVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXNDO0FBQ3RDLGdEQUFnRDtBQUNoRCw0Q0FBNEM7QUFFNUMsc0JBQXNCO0FBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV4QyxvQkFBb0I7QUFDcEIsSUFBSSxVQUFVLEdBQWlELEVBQUUsQ0FBQztBQUNsRSxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUMzRCxVQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxVQUFVLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUVuRSxpREFBaUQ7QUFDakQsS0FBYyxVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87SUFBaEIsSUFBSSxDQUFDLGdCQUFBO0lBQ04sS0FBSyxJQUFJLE1BQUksSUFBSSxVQUFVLEVBQUU7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFLLENBQUMsY0FBUyxVQUFVLENBQUMsTUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixVQUFNLE1BQU8sQ0FBQyxDQUFDO0tBQzVHO0NBQ0oifQ==