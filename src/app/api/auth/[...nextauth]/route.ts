import { NextResponse } from "next/server";

export const GET = () =>
  NextResponse.json({ message: "Auth disabled" }, { status: 404 });

export const POST = () =>
  NextResponse.json({ message: "Auth disabled" }, { status: 404 });
