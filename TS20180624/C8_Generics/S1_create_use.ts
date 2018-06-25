function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
let output2 = identity("myString"); //use type inference

