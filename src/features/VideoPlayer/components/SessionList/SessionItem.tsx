import { FC } from "react";

const SessionItem: FC = () => {
  return (
    <div className="avatar ml-sm flex flex-col items-center space-y-sm cursor-pointer">
      <p className={`text-lg text-primary-light`}>ویدیو شماره ۲</p>
      <div className="w-40 mask mask-squircle">
        <img src={process.env.REACT_APP_TEST_PIC} alt="mohadese" />
      </div>
      <p className="text-xs text-primary-light text-center">
        یک سری درباره توضیحات که بیرون میزنه!
      </p>
    </div>
  );
};

export default SessionItem;
