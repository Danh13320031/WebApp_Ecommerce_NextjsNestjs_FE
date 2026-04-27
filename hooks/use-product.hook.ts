import { productService } from "@/services/apis/product.service";
import {
  IPaginationMeta,
  IProduct,
  IProductQueryParam,
  IProductResponse,
} from "@/types/product.type";
import { useCallback, useState } from "react";

export function useProduct() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);

  const getProducts = useCallback(
    async (params?: IProductQueryParam): Promise<IProductResponse | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await productService.getProducts(params);

        setProducts(response?.data || []);
        setMeta(response?.meta || null);

        return response;
      } catch (error) {
        const message = `Fail to load products: ${error}`;
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return {
    isLoading,
    products,
    getProducts,
    error,
    meta,
  };
}
