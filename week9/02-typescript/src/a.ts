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
