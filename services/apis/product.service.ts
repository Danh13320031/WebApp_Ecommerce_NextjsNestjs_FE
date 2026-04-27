import { IProductQueryParam, IProductResponse } from "@/types/product.type";
import { apiClient } from "./axios.config";

export class productService {
  private static readonly ENDPOINT = "/products";

  static async getProducts(
    params?: IProductQueryParam,
  ): Promise<IProductResponse | null> {
    const response = await apiClient.get<IProductResponse>(this.ENDPOINT, {
      params,
    });

    console.log(response.data);

    return response.data;
  }
}
