import { ITerm } from "../add/types";
import { IApiTerm } from "./types";

export const apiTerm2local = ({
  course,
}: {
  course: IApiTerm;
}): ITerm & { id: string } => ({
  description: "some description",
  level: course.level,
  month: "مرداد",
  sessionCount: "10",
  title: course.title,
  id: course.id,
});
