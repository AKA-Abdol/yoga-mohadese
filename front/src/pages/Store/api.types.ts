export interface IProductCourse {
  description: string;
  level: number;
  start_date: string;
  end_date: string;
  id: string;
  title: string;
}

export interface ICartItem {
  count: number;
  overallPrice: number;
  product: IProductCourse;
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
