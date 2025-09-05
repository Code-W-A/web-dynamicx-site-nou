import { NextResponse } from "next/server";

export const POST = async () =>
  NextResponse.json({ message: "Register disabled" }, { status: 404 });
