import { ITerm } from "../add/types";
import { IApiTerm } from "./types";

export const apiTerm2local = ({
  course,
}: {
  course: IApiTerm;
}): ITerm & { id: string } => ({
  description: "some description",
  level: course.level,
  title: course.title,
  id: course.id,
  range: [],
});
