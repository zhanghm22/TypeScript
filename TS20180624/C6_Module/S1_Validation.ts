//----------------------module
/*
    1.Modules have own scope, not in the global scope.
    2.The relationships between modules are specified by "imports" and "exports".
    3."import" will use module loader. At runtime locating and executing 
      all dependencies of a module before executing it.
*/

export interface StringValidator {
  isAcceptable(s: string): boolean;
}