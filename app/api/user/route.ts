import db from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const users = await db.collection("user").find({}).toArray();
    return NextResponse.json(users);
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
    try {
      const user = await request.json();
      const result = await db.collection('user').insertOne(user);
      return NextResponse.json({ message: 'user created', id: result.insertedId }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to create user', error }, { status: 500 });
    }
  }
