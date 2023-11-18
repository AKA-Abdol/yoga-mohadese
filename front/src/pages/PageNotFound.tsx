import { FC } from "react";
import NotFoundImage from "../assets/images/404.png";
import Button from "src/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PageNotFound: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const returnToLastRoute = () => navigate(-1);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 lg:w-2/5 h-1/2 flex flex-col justify-center">
        <img src={NotFoundImage} alt="404" className="w-full object-contain" />
        <p className="text-center text-normal md:text-lg text-primary-light">
          {t(["pagesPageNotFound1"])}
        </p>
        <Button
          onClick={returnToLastRoute}
          className="text-lg btn-primary-theme mt-sm"
        >
          {t(["pagesPageNotFound2"])}
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
