"use server";
import db from "@/utils/db";

export const fetchFeaturedProducts = async () => {
  return await db.product.findMany({
    where: {
      featured: true,
    },
  });
};

export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return await db.product.findMany({
    where: {
      name: {
        contains: search,
        mode: "insensitive",
      },
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: { id: productId },
  });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
