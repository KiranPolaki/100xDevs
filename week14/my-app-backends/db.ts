import { PrismaClient } from "@prisma/client";

const PrismaClientSignleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof PrismaClientSignleton>;
}

const prisma = globalThis.prisma ?? PrismaClientSignleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma;
