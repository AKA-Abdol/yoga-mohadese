import { useFormik } from "formik";
import Button from "src/components/ui/Button";
import Input from "src/components/ui/Input";
import { FC, useEffect } from "react";
import TextArea from "src/components/ui/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "src/services";
import RangePicker from "src/components/ui/RangePicker";
import { ITermInput, TermInitialValues } from "../../add/types";
import { termValidationSchema } from "../../types";
import SelectLevel from "../../SelectLevel";
import { BASE_TERM_URL } from "../../api.data";
import { ITermApi } from "src/pages/Admin/types";
import { apiTerm2local } from "src/pages/Admin/api.converter";
import { localTerm2api } from "../../add/api.converter";
import { useTranslation } from "react-i18next";

const TermEdit: FC = () => {
  const {t} = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const term = useQuery({
    queryKey: ["term-data"],
    queryFn: api.get<{ course: ITermApi }>(`${BASE_TERM_URL}/${id}`),
  });
  const mutation = useMutation(
    api.put<ITermInput>(`${BASE_TERM_URL}/${id}`, localTerm2api)
  );
  const formik = useFormik({
    initialValues: TermInitialValues,
    validationSchema: termValidationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      mutation.mutate(values);
    },
  });

  useEffect(() => {
    if (term.isSuccess) {
      formik.setValues({
        ...apiTerm2local(term.data.course),
        level: `${term.data.course.level}`,
      });
    }
  }, [term.isSuccess, term.data?.course]);

  if (mutation.isSuccess) {
    // snackbar issues
    navigate("/admin/terms");
  }

  return (
    <div className={`w-full h-full px-lg py-sm flex justify-center`}>
      <form className="h-full w-full lg:w-1/2" onSubmit={formik.handleSubmit}>
        <div
          className="w-full h-full flex flex-col justify-center space-y-md lg:space-y-lg"
          style={{ direction: "ltr" }}
        >
          <Input
            onChange={formik.handleChange}
            placeholder={t("adminIdEditAdd-title")}
            className="text-center w-full input-primary-theme"
            id="title"
            name="title"
            error={formik.errors.title}
            value={formik.values.title}
          />
          <SelectLevel
            onChange={formik.handleChange}
            value={`${formik.values.level}`}
            id="level"
            name="level"
            classnames="text-center bg-inherit"
            placeholder={t("adminIdEditAdd-selectLevel")}
          />
          <RangePicker
            value={formik.values.range}
            onChange={(newRange) => {
              formik.setFieldValue("range", newRange);
            }}
          />
          <TextArea
            onChange={formik.handleChange}
            placeholder={t("adminIdEditAdd-description")}
            className="text-center w-full input-primary-theme"
            id="description"
            name="description"
            error={formik.errors.description}
            value={formik.values.description}
          />
          <div className="w-full flex flex-row justify-around">
            <Button type="submit" className={"w-36 md:w-64 btn-primary-theme"}>
              {mutation.isLoading ? (
                <span className="loading loading-infinity loading-lg" />
              ) : (
                `${t("adminIdEditAdd-confirm")}`
              )}
            </Button>
            <Button
              className={"w-36 md:w-64 btn-cancel"}
              onClick={() => navigate("/admin/terms")}
            >
              {t("adminIdEditAdd-cancel")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TermEdit;
