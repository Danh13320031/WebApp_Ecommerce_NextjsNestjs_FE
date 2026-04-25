import { TRootState } from "@/store";
import { ICartItem } from "@/types/cart.type";
import { useSelector } from "react-redux";

export function useCart() {
  const cartState = useSelector((state: TRootState) => state.cart);
  const items: ICartItem[] = cartState.items;

  return {
    items,
    totalItems: items.reduce((sum, i) => sum + i.quantity, 0),
    totalPrice: cartState.totalPrice,
  };
}
