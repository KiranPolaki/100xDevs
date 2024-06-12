import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function getTodod(userId: number) {
//   await prisma.todos.findMany({
//     where: {
//       userId: userId,
//     },
//   });
// }
// * With relations we can get the data with joins
async function getTododAndUserDetails(userId: number) {
  // await prisma.todos.create({
  // })
  //   await prisma.todos.findMany({
  //     where: {
  //       userId: userId,
  //     },
  //   });
}
