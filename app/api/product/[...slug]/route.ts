import db from "@/utils/db";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
  
    try {
      const product = await db.collection('product').findOne({ _id: new ObjectId(slug) });
      if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
      return NextResponse.json(product);
    } catch (error) {
      return NextResponse.json({ message: 'Failed to fetch product', error }, { status: 500 });
    }
  }