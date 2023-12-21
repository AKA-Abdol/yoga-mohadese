import { FC } from "react";
import Button from "../Button";
import { English2Persian } from "src/utils/convertors";
import classNames from "classnames";

interface PaginationProps {
  page: number;
  perPage: number;
  totalCount: number;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = (props) => {
  const lastPage = Math.ceil(props.totalCount / props.perPage);
  const goNextPage = () => {
    if (props.page !== lastPage) props.setPage(props.page + 1);
  };
  const goPreviousPage = () => {
    if (props.page !== 1) props.setPage(props.page - 1);
  };
  return (
    <div className="w-full flex justify-center items-center py-sm h-[15%]">
      <div className="join">
        <Button
          className="btn-primary-theme rounded-l-none text-normal"
          onClick={goNextPage}
        >
          بعدی
        </Button>
        <Button
          className={classNames(
            "btn-primary-theme rounded-none text-xl",
            props.page === lastPage && "btn-primary-active"
          )}
        >{`صفحه ${English2Persian(`${props.page}`)}`}</Button>
        <Button
          className="btn-primary-theme rounded-r-none text-normal mr-[1px]"
          onClick={goPreviousPage}
        >
          قبلی
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
