//Import the entire module into a single variable, and use it to access the module exports
import * as validator from "./S2_ZipCodeValidator";
let myValidator = new validator.mainValidator();
console.log(validator.numberRegexp);

