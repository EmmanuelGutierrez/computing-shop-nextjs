import { ICategory } from "./ICategory";

interface IImage {
  imageUrl: string;
  imagePublicId: string;
}

export interface IProduct {
  _id: string;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: IImage[];
  quantity?: number;
}
