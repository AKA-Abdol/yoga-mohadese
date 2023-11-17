import Card from "../../../../../../components/ui/Card";
import Input from "../../../../../../components/ui/Input";
import SubmitCancelButton from "../../../../../../components/ui/SubmitCancelButton";
import { useFormik } from "formik";
import { FC } from "react";
import { AddVideoItemProps, AddVideoSchema } from "./types";
import { Persian2English } from "src/utils/converts";
import { useTranslation } from "react-i18next";

const AddVideoItem: FC<AddVideoItemProps> = (props) => {
  const {t} = useTranslation()
  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      num: "",
      thumbnailLink: "",
    },
    onSubmit: (values) => {
      props.onSubmit({
        link: values.link,
        title: values.title,
        num: +Persian2English(values.num),
        thumbnail: values.thumbnailLink,
      });
    },
    validationSchema: AddVideoSchema,
    validateOnChange: false,
  });
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14 w-full`}>
      <form
        className="w-full h-full flex flex-row items-center gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-24 h-full">
          <Input
            name="num"
            id="num"
            placeholder={t(["adminAddVideoItem-number"])}
            className="w-full h-full input-primary-theme text-center text-xs"
            onChange={formik.handleChange}
            value={formik.values.num}
            containerClassName="h-full"
            errorBorderOnly={true}
            error={formik.errors.num}
          />
        </div>
        <div className="w-1/3 h-full">
          <Input
            name="title"
            id="title"
            placeholder={t(["adminAddVideoItem-title"])}
            className="w-full h-full input-primary-theme text-center"
            onChange={formik.handleChange}
            value={formik.values.title}
            containerClassName="h-full"
            errorBorderOnly={true}
            error={formik.errors.title}
          />
        </div>
        <div className="w-1/3 h-full">
          <Input
            name="link"
            id="link"
            placeholder={t(["adminAddVideoItem-link"])}
            className="w-full h-full input-primary-theme text-center"
            onChange={formik.handleChange}
            value={formik.values.link}
            containerClassName="h-full"
            errorBorderOnly={true}
            error={formik.errors.link}
          />
        </div>
        <div className="w-1/3 h-full">
          <Input
            name="thumbnailLink"
            id="thumbnailLink"
            placeholder={t(["adminAddVideoItem-thumbnail"])}
            className="w-full h-full input-primary-theme text-center"
            onChange={formik.handleChange}
            value={formik.values.thumbnailLink}
            containerClassName="h-full"
            errorBorderOnly={true}
            error={formik.errors.thumbnailLink}
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
