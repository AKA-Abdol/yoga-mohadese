export interface ICartProductDetails {
  description: string;
  end_date: string;
  id: string;
  level: number;
  start_date: string;
  price: number;
  title: string;
}

export interface ICartProduct {
  detail: ICartProductDetails;
  id: string;
  images: string[];
  maxQuantity: number;
  price: number;
  title: string;
  type: "course";
}

export interface ICartItem {
  quantity: number;
  overallPrice: number;
  product: ICartProduct;
}

export interface IShopItemDetails {
  description: string;
  id: string;
  level: number;
  price: number;
  title: string;
}

export interface IShopDataItem {
  hasAccess: boolean;
  id: string;
  images: string[];
  maxQuantity: number;
  price: number;
  type: "Course" | "Item";
  title: string;
  detail: IShopItemDetails;
}

export interface IShopData {
  count: number;
  courses: IShopDataItem[];
}

export interface ISubmitOrderRes {
  paymentLink: string;
}
