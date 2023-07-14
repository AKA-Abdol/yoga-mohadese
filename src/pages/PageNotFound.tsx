import { FC } from "react";
import NotFoundImage from "../assets/images/404.png";

const PageNotFound: FC = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/2 lg:w-2/5 h-1/2 flex flex-col justify-center">
        <img
          src={NotFoundImage}
          alt="404"
          className="w-full object-contain"
        />
        <p className="text-center text-normal md:text-lg text-primary-light">
          ۴۰۴ | صفحه مورد نظر یافت نشد
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
