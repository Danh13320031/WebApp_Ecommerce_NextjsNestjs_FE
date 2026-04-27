
export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  sku: string;
  imageUrl: string | null;
  category: string;
}

export interface IProductQueryParam {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
}

export interface IPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IProductResponse {
  data: IProduct[];
  meta: IPaginationMeta;
}
