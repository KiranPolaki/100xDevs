// import { PrismaClient } from "@prisma/client";
// import { NextRequest, NextResponse } from "next/server";
// import client from "@/db";

// // export async function GET(req: NextRequest) {
// //  We dont need the get here cause it makes no sense to hit the server when server is inside the same box na - so move it
// // }

// export async function POST(req: NextRequest) {
//   const body = await req.json();
//   try {
//     await client.user.create({
//       data: {
//         email: body.email,
//         password: body.password,
//       },
//     });
//     console.log(body);
//     console.log(req.headers.get("authorization"));
//     console.log(req.nextUrl.searchParams.get("name"));
//     return NextResponse.json({
//       message: "Here is the Token take it",
//       body: body,
//     });
//   } catch (e) {
//     return NextResponse.json(
//       { message: "error while signup" },
//       {
//         status: 401,
//       }
//     );
//   }
// }
