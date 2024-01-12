import { FC } from "react";
import NotFoundImage from "../assets/images/404.png";
import Button from "src/components/ui/Button";
import { useNavigate } from "react-router-dom";

const PageNotFound: FC = () => {
  const navigate = useNavigate();
  const returnToLastRoute = () => navigate(-1);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-8">
      <img src={NotFoundImage} alt="404" className="w-[30vh] md:w-[30vw] object-contain" />
      <p className="text-center text-normal md:text-lg text-ajori">
        ۴۰۴ | صفحه مورد نظر یافت نشد
      </p>
      <Button
        onClick={returnToLastRoute}
        className="text-lg btn-primary-theme mt-sm"
      >
        بازگشت
      </Button>
    </div>
  );
};

export default PageNotFound;
