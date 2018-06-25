//Re-exports (use to extend other modules. A re-export does not import it locally, or introduce a local variable.)
export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
        return s.length === 5 && parseInt(s).toString() === s;
    }
}

// Export original validator but rename it
export { mainValidator as RegExpBasedZipCodeValidator } from "./S2_ZipCodeValidator";