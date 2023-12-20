import { SetStateAction } from "react";

export type CourseAvailability = "purchased" | "selected" | "available";

export interface IShopCourseCard {
  title: string;
  id: string;
  level: number;
  price: number;
  month?: string;
  backgroundTuhmbURL: string;
  itemStatus: CourseAvailability;
  index?: number;
  onQuantityChange():void ;
  // addToCart(itemId: string, index: number): void;
  // deleteFromCart: (itemId: string, index: number) => void;
}
