import { Product } from "@/types";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function fetchProducts(): Promise<Product[]> {
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

export async function fetchProduct(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_URL}/mock/public/products/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}
