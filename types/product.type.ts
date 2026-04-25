import { ICategory } from "./category.type";

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  sku: string;
  imageUrl: string | null;
  category: ICategory;
}
