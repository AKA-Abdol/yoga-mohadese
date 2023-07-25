import { FC } from "react";

const SessionItem: FC = () => {
    return (
        <div className="h-full avatar ml-sm flex flex-col items-center space-y-sm cursor-pointer">
            <p className={`text-lg text-primary-light`}>ویدیو شماره ۲</p>
            <p className="text-xs text-primary-light">توضیحات ویدیو ...</p>
            <div className="h-40 mask mask-squircle">
                <img src={process.env.REACT_APP_TEST_PIC} alt="mohadese"/>
            </div>
        </div>
    )
};

export default SessionItem;
