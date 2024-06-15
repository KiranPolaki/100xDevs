import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return NextResponse.json({
    email: "sai@gmail.com",
    name: "saiiiik",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);
  console.log(req.headers.get("authorization"));
  console.log(req.nextUrl.searchParams.get("name"));
  return NextResponse.json({
    message: "Here is the Token take it",
  });
}
