import db from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const carts = await db.collection("cart").find({}).toArray();
    return NextResponse.json(carts);
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
    try {
      const cart = await request.json();
      const result = await db.collection('cart').insertOne(cart);
      return NextResponse.json({ message: 'cart created', id: result.insertedId }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to create cart', error }, { status: 500 });
    }
  }
