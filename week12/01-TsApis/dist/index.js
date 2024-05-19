"use strict";
const users = {
    "sai@ki": { id: "sai@ki", name: "Jhon Doe" },
};
const user = {
    name: "Sai",
};
// * if there are multiple values of readonly we can also do this
const user2 = {
    name: "polaki",
};
// ! if we want this to not work - then we define the readonly
// user.name = "kiran";
console.log(user.name);
function updateUser(user) {
    // ! hit the database to update the user
    console.log(`Name: ${user.name}, Email:${user.email}`);
}
// * Slide 1
// interface User {
//   name: string;
//   age: number;
// }
// function sumOfAge(user1: User, user2: User): number {
//   return user1.age + user2.age;
// }
// console.log(sumOfAge({ name: "sai", age: 21 }, { name: "kiran", age: 30 }));
