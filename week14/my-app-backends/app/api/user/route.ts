import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export function GET(req: NextRequest) {
  return NextResponse.json({
    email: "sai@gmail.com",
    name: "saiiiik",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    console.log(body);
    console.log(req.headers.get("authorization"));
    console.log(req.nextUrl.searchParams.get("name"));
    return NextResponse.json({
      message: "Here is the Token take it",
      body: body,
    });
  } catch (e) {
    return NextResponse.json(
      { message: "error while signup" },
      {
        status: 401,
      }
    );
  }
}
