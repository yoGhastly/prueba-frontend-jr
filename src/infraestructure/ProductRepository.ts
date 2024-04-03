import { Product } from "../types";

export interface ProductRepository {
  all(): Promise<Product[]>;
  getProductBySku({ id }: { id: string }): Promise<Product | null>;
}
