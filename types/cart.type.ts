import { IProduct } from "./product.type";

export interface ICartItem {
  id: string;
  cartId: string;
  productId: string;
  product: IProduct;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
