// * Type Inference - we dont have to mention types of return types sometypes
function great(firstname: string): string {
  console.log(`Hello ${firstname}`);
  return "sai";
}

function isLegeal(age: number): boolean {
  if (age > 18) {
    return true;
  }
  return false;
}

function runAfter1S(fn: () => void) {
  setTimeout(fn, 1000);
}

runAfter1S(function () {
  console.log("Hi");
});

great("polaki");
console.log(isLegeal(12) ? "Can Vote" : "Cant vote");

const x: number = 1;
console.log(x);

// * without Interfaces
// function isLeagalAgeI(user: {
//   firstName: string;
//   lastName: string;
//   age: number;
// }): boolean {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// isLeagalAgeI({
//   firstName: "Sai",
//   lastName: "kiran",
//   age: 21,
// });
// * With Interface
interface User {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; // optional argument
}

function isLeagalAgeI(user: User): boolean {
  if (user.age > 18) {
    return true;
  }
  return false;
}

isLeagalAgeI({
  firstName: "Sai",
  lastName: "kiran",
  age: 21,
});

// * Unions
type StringOrNumber = string | number;
function printId(id: StringOrNumber) {
  console.log(`ID:${id}`);
}
printId(101);
printId("202");

// * Interseaction
type Employee = {
  name: string;
  startDate: Date;
};
interface Manager {
  name: string;
  department: string;
}
type TechLead = Employee & Manager;
// With type only we can do & and or, interfaces lets you extend/implement

// * Arrays
function ArrayInput(arr: number[]) {
  return arr[0];
}
ArrayInput([1, 2, 3]);

// * Enums
type KeyInputs = "up" | "down" | "left" | "right";
enum Direction {
  Up, // 0
  Down, //1
  Left, //2
  Right, //3
}
enum Direction2 {
  Up = "up",
  Down = "down",
  Left = "left",
  Right = "right",
}
function doSomething(keyPressed: Direction) {
  if (keyPressed == Direction.Left) {
    //whatever
  }
}
doSomething(Direction.Left);
doSomething(Direction.Up);

// * Generics - for better infering
function identity<T>(arg: T) {
  return arg;
}
let output = identity<string>("mystring");
function getFirstElement<T>(arr: T[]) {
  return arr[0];
}
let arr = getFirstElement<string>(["kirat", "is", "singh"]);
let arr2 = getFirstElement<number>([1, 2]);
let arr3 = getFirstElement<string | number>([1, "sai", 2]);
