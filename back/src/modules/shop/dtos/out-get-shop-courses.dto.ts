import { OutProduct } from '../shop.entity';

export class OutGetShopCoursesDto {
  courses: Array<OutProduct & { hasAccess: boolean }>;
  count: number;
}
