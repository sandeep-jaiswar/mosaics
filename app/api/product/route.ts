import db from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const products = await db.collection("product").find({}).toArray();
    return NextResponse.json(products);
  } catch (error: unknown) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
    try {
      const product = await request.json();
      const result = await db.collection('product').insertOne(product);
      return NextResponse.json({ message: 'Product created', id: result.insertedId }, { status: 201 });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to create product', error }, { status: 500 });
    }
  }
