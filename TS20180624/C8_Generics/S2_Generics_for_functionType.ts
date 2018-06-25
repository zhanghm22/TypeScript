//The type of generic functions is just like those of non-generic functions
function identity2<T>(arg: T): T {
    return arg;
}
//1.
let myIdentity: <U>(arg: U) => U = identity2;
myIdentity<string>("myString");
//2.
let myIdentity2: {<T>(arg: T): T} = identity2;
myIdentity2<string>("myString");
//3.
interface GenericIdentityFn {
    <T>(arg: T): T;
}
let myIdentity3: GenericIdentityFn = identity2;
myIdentity3<string>("myString");
//4.
interface GenericIdentityFn2<T> {
    (arg: T): T;
}
let myIdentity4: GenericIdentityFn2<number> = identity2;
myIdentity4(11);