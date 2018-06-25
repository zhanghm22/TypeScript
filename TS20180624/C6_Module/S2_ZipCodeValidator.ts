
import { StringValidator } from "./S1_Validation";

//Exporting a declaration(such as a variable, function, class, type alias, or interface)
export const numberRegexp = /^[0-9]+$/;

//Export statements(be renamed for consumers)
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator as mainValidator };