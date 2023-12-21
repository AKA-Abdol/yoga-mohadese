import { SetStateAction } from "react";

export type ShopCourseStatus = "inCart" | "available" | "purchased";

export interface IShopItemStatus {
  availability: ShopCourseStatus;
  isLoading: boolean;
  id: string;
}

export interface IShopCourseCard {
  id: string;
  status: IShopItemStatus;
  index: number;
  // setShopItemStatus: React.Dispatch<React.SetStateAction<ShopCourseStatus | undefined>>;
  onQuantityChange(a: any, b: string): any;
}
