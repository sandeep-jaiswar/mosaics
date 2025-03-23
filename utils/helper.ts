import { ObjectId, WithId } from "mongodb";
import db from "./db";
import { Product } from "@/types/product";

export const fetchProductUsingId = async (
  slug: string
): Promise<WithId<Product> | null> => {
  try {
    const product = await db
      .collection("product")
      .findOne({ _id: new ObjectId(slug) });
    return product;
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
};

export const fetchAllProducts = async (): Promise<WithId<Product>[]> => {
  try {
    const products = await db.collection("product").find({}).toArray();
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
