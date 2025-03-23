import db from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const orders = await db.collection("order").find({}).toArray();
    return NextResponse.json(orders);
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
    try {
      const order = await request.json();
      const result = await db.collection('order').insertOne(order);
      return NextResponse.json({ message: 'order created', id: result.insertedId }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to create order', error }, { status: 500 });
    }
  }
