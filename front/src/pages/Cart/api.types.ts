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
