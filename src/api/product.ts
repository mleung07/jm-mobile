import { Product } from "@/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function fetchProducts(): Promise<Product[]> {
  console.log("API_URL:", API_URL);
  try {
    const response = await fetch(`${API_URL}/mock/public/products`);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
