import Card from "../../../../../components/ui/Card";
import Input from "../../../../../components/ui/Input";
import SubmitCancelButton from "../../../../../components/ui/SubmitCancelButton";
import { useFormik } from "formik";
import { FC } from "react";
import { AddVideoItemProps } from "./types";

const AddVideoItem: FC<AddVideoItemProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      num: "",
    },
    onSubmit: (values) => {
      props.onSubmit({
        link: values.link,
        title: values.title,
        num: +values.num,
      });
    },
  });
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14 w-full`}>
      <form
        className="w-full h-full flex flex-row items-center"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-24 h-full">
          <Input
            name="num"
            id="num"
            placeholder="شماره"
            className="w-full h-full input-primary-theme text-center text-xs"
            onChange={formik.handleChange}
            value={formik.values.num}
            containerClassName="h-full"
            errorBorderOnly={true}
          />
        </div>
        <div className="w-1/2 h-full">
          <Input
            name="title"
            id="title"
            placeholder="عنوان"
            className="w-full h-full input-primary-theme text-center"
            onChange={formik.handleChange}
            value={formik.values.title}
            containerClassName="h-full"
            errorBorderOnly={true}
          />
        </div>
        <div className="w-1/2 h-full">
          <Input
            name="link"
            id="link"
            placeholder="لینک"
            className="w-full h-full input-primary-theme text-center"
            onChange={formik.handleChange}
            value={formik.values.link}
            containerClassName="h-full"
            errorBorderOnly={true}
          />
        </div>
        <div className={"h-full w-24"}>
          <SubmitCancelButton
            classnames="justify-between pr-2"
            onCancel={props.onCancel}
            onSubmit={() => {}}
          />
        </div>
      </form>
    </Card>
  );
};

export default AddVideoItem;
