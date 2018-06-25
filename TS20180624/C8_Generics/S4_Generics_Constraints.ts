function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

interface Lengthwise {
    length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

//loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity2({length: 10, value: 3});


//Using Type Parameters in Generic Constraints
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
//getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.

//Using Class Types in Generics
class BeeKeeper {
    constructor(public hasMask?: boolean){};
}

class ZooKeeper {
    constructor(public nametag?: string){};
}

class Animal {
    constructor(public numLegs?: number){};
}

class Bee extends Animal {
    constructor(public keeper: BeeKeeper, public numLegs?: number){super(numLegs)};
}

class Lion extends Animal {
    constructor(public keeper: ZooKeeper, public numLegs?: number){super(numLegs)};
}

function createInstance<A extends Animal>(c: new (keeper: any, numLegs: number) => A, keeper: any, numLegs: number): A {
    return new c(keeper, numLegs);
}
let beeKeeper = new BeeKeeper();
let zooKeeper = new ZooKeeper();
createInstance(Lion, zooKeeper, 4).keeper.nametag;  // typechecks!
createInstance(Bee, beeKeeper, 8).keeper.hasMask;   // typechecks!