import { Injectable } from "@nestjs/common";
import { CourseService } from "./course.service";

@Injectable()
export class ShopService {
    constructor(private readonly courseService: CourseService) {}

}