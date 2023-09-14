import { FC } from "react";
import NotFoundImage from "../assets/images/404.png";
import Button from "src/components/ui/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const returnToLastRoute = () => navigate(-3);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 lg:w-2/5 h-1/2 flex flex-col justify-center">
        <img src={NotFoundImage} alt="404" className="w-full object-contain" />
        <p className="text-center text-normal md:text-lg text-primary-light">
          ۴۰۴ | صفحه مورد نظر یافت نشد
        </p>
        <Button
          onClick={returnToLastRoute}
          className="text-lg btn-primary-theme mt-sm"
        >
          بازگشت
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
