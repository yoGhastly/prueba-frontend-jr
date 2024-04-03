import { ProductRepository } from "../infraestructure/ProductRepository";
import { Product, ProductsResponse } from "../types";

export class Repository implements ProductRepository {
  async all(): Promise<Product[]> {
    const endpoint = `${import.meta.env.VITE_API_BASE_URL}/products`;
    const options: RequestInit = {
      method: "GET",
      headers: {
        Authorization: `${import.meta.env.VITE_TENDENCYS_API_KEY}`,
      },
    };
    try {
      const data = await fetch(endpoint, options);
      const { products }: ProductsResponse = await data.json();
      console.log(products);
      return products;
    } catch (error) {
      console.error(`Error retrieving products`);
      return [];
    }
  }

  async getProductById({ id }: { id: string }): Promise<Product | null> {
    try {
      const endpoint = `${import.meta.env.VITE_API_BASE_URL}/products/${id}`;
      const options: RequestInit = {
        method: "GET",
        headers: {
          Authorization: `${import.meta.env.VITE_TENDENCYS_API_KEY}`,
        },
      };
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const { product } = await response.json();
      console.log(product);
      return product;
    } catch (error) {
      console.error(`Error retrieving product with ID ${id}:`, error);
      return null;
    }
  }
}
