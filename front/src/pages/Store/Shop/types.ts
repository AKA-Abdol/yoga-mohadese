import { SetStateAction } from "react";

export type ShopCourseStatus = "inCart" | "available";

export interface IShopCourseCard {
  id: string;
  onQuantityChange(a:any): any;
}
