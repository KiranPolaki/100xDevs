interface User {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

// * Api 6 (Exclude)
type EventType = "click" | "scroll" | "mousemove";
type ExcludeEvent = Exclude<EventType, "scroll">; // "click" | "mousemove"

// * Api 5 (Map)
// * similar to maps in c++ or Java - to create key value pairs clean (better than the record)
type UserMap = {
  id: string;
  name: string;
};
const usersMap = new Map<string, UserMap>();
usersMap.set("sai@ki", { id: "sai@ki", name: "Jhon Doe" });
usersMap.set("pol@ki", { id: "pol@ki", name: "Jane DOe" });
const userget = usersMap.get("sai@ki");

// * Api 4 (Records)
interface UglyUser {
  id: string;
  name: string;
}
// * The below syntax is the reason we use the record
type UglyUsers = { [key: string]: UglyUser };
type NiceUsers = Record<string, UglyUser>;
const users: UglyUsers = {
  "sai@ki": { id: "sai@ki", name: "Jhon Doe" },
};

// * Api 3 (Read only)
// * Usecases - when we are creaing the then we can make them uneditable like api key and the endpoint
// ! Problem : We can update the values of an array or the object even tho the objects are const
type User3 = {
  readonly name: string;
};
const user: User3 = {
  name: "Sai",
};
// * if there are multiple values of readonly we can also do this
const user2: Readonly<User3> = {
  name: "polaki",
};
// ! if we want this to not work - then we define the readonly
// user.name = "kiran";
console.log(user.name);

// * Api 2 (Partial)
// * We can either create a new type with "?" or use the Pqartial
// type UserFormUpdate = {
//   name?: string;
//   email?: string;
// };
// * We have to pick first then use the partial so

// * Api 1 (PICK)
// * When we want to update something then what we do is basically we dont update all of them we pick whjat to update
// * so when doing so we cant just pick the USer interface so we can create a new interface
// ! But the problem is if we anyhow update the type of the USer interface then we have to make the chanegs in multiple places
// * This is where the Pick Api comes into picture
type UpdateProps = Pick<User, "name" | "age" | "email">;
type UpdatePropsOptional = Partial<UpdateProps>;
function updateUser(user: UpdatePropsOptional) {
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
