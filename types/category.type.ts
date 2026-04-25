export interface ICategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  imageUrl: string;
  isActive: boolean;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}
