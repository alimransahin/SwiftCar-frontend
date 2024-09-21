export interface IProduct {
  _id?: string;
  id?: number;
  name: string;
  category: string;
  qty: number;
  regularPrice: number;
  offerPrice?: number;
  images: string[] | string;
  description: string;
  quantity?: number | undefined;
}
