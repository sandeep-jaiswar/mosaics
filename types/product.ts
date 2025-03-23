import { ObjectId } from "mongodb";

export type Product = {
  _id: ObjectId;
  name?: string;
  description?: string;
  imgUrls?: string[];
  price?: number;
  rating?: number;
  discount?: number;
  priceAfterDiscount?: number;
  specifications?: Record<string, string>;
};
