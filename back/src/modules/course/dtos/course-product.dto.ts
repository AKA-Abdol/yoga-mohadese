import { InProduct } from 'src/shared/in-product.dto';
import { TypeCourseDto } from './type-course.dto';
import { ProductType } from 'src/modules/order/orderItem/dtos/product';

export class CourseProduct implements InProduct {
  constructor(
    private readonly course: TypeCourseDto,
    private readonly images: string[] = [],
  ) {}
  getPrice(): number {
    return this.course.price;
  }
  getImages(): string[] {
    return this.images;
  }
  getDetails() {
    return this.course;
  }
  getType(): ProductType {
    return ProductType.COURSE;
  }
}
