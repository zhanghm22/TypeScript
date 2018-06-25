"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var LettersOnlyValidator_1 = require("./LettersOnlyValidator");
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new ZipCodeValidator_1.ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator_1.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(function (s) {
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
});
//run command tsc --module commonjs C6_SimpleExample_1/Test.ts
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0M2X1NpbXBsZUV4YW1wbGVfMS9UZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQXNEO0FBQ3RELCtEQUE4RDtBQUU5RCxzQkFBc0I7QUFDdEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRXhDLG9CQUFvQjtBQUNwQixJQUFJLFVBQVUsR0FBc0MsRUFBRSxDQUFDO0FBQ3ZELFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7QUFDaEQsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztBQUV4RCxpREFBaUQ7QUFDakQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7SUFDYixLQUFLLElBQUksTUFBSSxJQUFJLFVBQVUsRUFBRTtRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxjQUFTLFVBQVUsQ0FBQyxNQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLFVBQU0sTUFBTyxDQUFDLENBQUM7S0FDNUc7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVILDhEQUE4RCJ9