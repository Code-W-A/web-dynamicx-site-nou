import { NextResponse } from "next/server";

export const POST = async () =>
  NextResponse.json({ message: "Forgot password disabled" }, { status: 404 });
