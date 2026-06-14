export type Category = "all" | "horloges" | "petten";

export type ProductCategory = "horloges" | "petten";

export interface Product {
  id: string;
  brand: string;
  title: string;
  price: number;
  category: ProductCategory;
  status: "beschikbaar" | "uniek";
  statusLabel: "Beschikbaar" | "1 van 1";
  description: string;
  details: string[];
  images: string[];
}
