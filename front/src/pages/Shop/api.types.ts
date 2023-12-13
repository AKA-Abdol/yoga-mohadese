export interface IShopItemDetails {
  description: string;
  id: string;
  level: number;
  price: number;
  title: string;
}

export interface IShopItem {
  id: string;
  images: string[];
  detail: IShopItemDetails;
}


