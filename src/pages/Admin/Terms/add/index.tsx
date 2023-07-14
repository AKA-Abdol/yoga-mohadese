import { useFormik } from "formik";
import { Button } from "../../../../components/ui/Button";
import { Input } from "../../../../components/ui/Input";
import { FC } from "react";
import TextArea from "../../../../components/ui/TextArea";
import SelectLevel from "../SelectLevel";
import SelectMonth from "../../../../components/ui/SelectMonth";
import { termValidationSchema } from "../types";
import { useNavigate } from "react-router-dom";

const AddTerm: FC = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: "",
      level: "",
      sessionCount: "",
      month: "",
      description: "",
    },
    validationSchema: termValidationSchema,
    validateOnChange: false,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  return (
    <div className={`w-full h-full px-lg py-sm flex justify-center`}>
      <form className="h-full w-full lg:w-1/2" onSubmit={formik.handleSubmit}>
        <div className="w-full h-full flex flex-col justify-center space-y-md lg:space-y-lg">
          <Input
            onChange={formik.handleChange}
            placeholder="عنوان"
            className="text-center w-full input-primary-theme"
            id="title"
            name="title"
            error={formik.errors.title}
            value={formik.values.title}
          />
          <SelectLevel
            onChange={formik.handleChange}
            value={formik.values.level}
            id="level"
            name="level"
            classnames="text-center bg-inherit"
            placeholder="انتخاب سطح"
          />
          <Input
            onChange={formik.handleChange}
            placeholder="تعداد جلسات"
            className="text-center w-full input-primary-theme"
            id="sessionCount"
            name="sessionCount"
            type="number"
            error={formik.errors.sessionCount}
            value={formik.values.sessionCount}
          />
          <SelectMonth
            onChange={formik.handleChange}
            value={formik.values.month}
            id="month"
            name="month"
            classnames="text-center"
            placeholder="انتخاب ماه"
          />
          <TextArea
            onChange={formik.handleChange}
            placeholder="توضیحات"
            className="text-center w-full input-primary-theme"
            id="description"
            name="description"
            error={formik.errors.description}
            value={formik.values.description}
          />
          <div className="w-full flex flex-row justify-around">
            <Button type="submit" className={"w-36 md:w-64 btn-primary-theme"}>
              تایید
            </Button>
            <Button
              className={"w-36 md:w-64 btn-cancel"}
              onClick={() => navigate("/admin/terms")}
            >
              لغو
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTerm;
