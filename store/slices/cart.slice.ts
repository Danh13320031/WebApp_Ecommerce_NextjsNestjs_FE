import { ICartItem } from "@/types/cart.type";
import { createSlice } from "@reduxjs/toolkit";

export interface ICartState {
  items: ICartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: ICartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
