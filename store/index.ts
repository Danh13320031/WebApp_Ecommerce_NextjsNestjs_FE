import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import authReducer from "./slices/auth.slice";
import cartReducer from "./slices/cart.slice";

// Hàm tạo kho lưu trữ (storage) (localStorage/sessionStorage)
const createNoopStorage = () => ({
  getItem: (): Promise<any> => Promise.resolve(null),
  setItem: (value: string): Promise<string> => Promise.resolve(value),
  removeItem: (): Promise<void> => Promise.resolve(),
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
});
// Bao bọc sử dụng redux-persist cho rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export type TAppDispatch = typeof store.dispatch;
// Tạo persistor để điều khiển sử dụng redux-persist cho việc lưu trữ / phục hồi (restore) dữ liệu
export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch<TAppDispatch>();
export type TRootState = ReturnType<typeof store.getState>;
