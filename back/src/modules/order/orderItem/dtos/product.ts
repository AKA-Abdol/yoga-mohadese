export enum ProductType {
  COURSE = 'Course',
}
export interface Product {
  type: ProductType;
  id: string;
}
