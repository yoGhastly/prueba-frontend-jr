export interface ProductsResponse {
  page: { next: number; previous: number };
  products: Product[];
  success: boolean;
}
export interface Product {
  sku: string;
  name: string;
  description: string;
  productType: string;
  quantity: number;
  price: number;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  units: string;
  categoryId: number;
  tags: string[];
  status: string;
  variants: string[];
  options: string[];
  images: string[];
  imageUrl: string;
  condition: string;
  link: string;
  dates: {
    created_at: Date;
    updated_at: Date;
  };
}
