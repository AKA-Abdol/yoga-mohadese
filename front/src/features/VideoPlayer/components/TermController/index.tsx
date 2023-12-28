import classNames from "classnames";
import { FC, useContext } from "react";
import HomeButton from "src/components/ui/HomeButton";
import { TermControllerProps } from "./types";
import TermSelect from "./TermSelect";
import TermData from "./TermData";
import Button from "src/components/ui/Button";
import { tokenPersistor } from "src/persistors/auth";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { VideoContext } from "../../VideoContext";
import api from "src/services";
import { ITermApi } from "../../types";
import { WithVideos } from "src/pages/Admin/Terms/[id]/videos/types";
import { BASE_TERM_URL } from "src/pages/Admin/Terms/api.data";
import RemainedDays from "./RemainedDays";
import SessionList from "../SessionList";

const TermController: FC<TermControllerProps> = (props) => {
  const navigate = useNavigate();
  const videoContext = useContext(VideoContext);
  const term = useQuery({
    queryKey: ["term-data", videoContext.selected.termId],
    queryFn: api.get<{ course: ITermApi & WithVideos }>(
      `${BASE_TERM_URL}/${videoContext.selected.termId}`
    ),
  });
  return (
    <div
      className={classNames(
        " min-h-screen overflow-y-auto",
        "flex flex-col items-center space-y-sm",
        "py-sm",
        "bg-white"
        // "bg-[url('src/assets/images/white-diamond-dark.png')]"
      )}
    >
      {/* SHOULD WE DELETE THIS? */}
      {/* <div className="border-4 flex flex-row justify-end w-full px-sm"> */}
      {/* <HomeButton /> */}
      {/* </div> */}
      {/* NAME AND LOGOUT */}
      <div
        className={classNames("w-full flex px-8 items-center justify-between")}
      >
        <p className="text-[#58423A] text-xl">{props.title}</p>
        <Button
          className="border-none text-base text-[#58423A] flex items-center p-0 m-0 h-fit min-h-fit max-h-fit"
          onClick={() => {
            tokenPersistor.delete();
            navigate("/");
          }}
        >
          خروج
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9.4425 9.75008L7.7175 11.4676C7.6472 11.5373 7.59141 11.6202 7.55333 11.7116C7.51525 11.803 7.49565 11.9011 7.49565 12.0001C7.49565 12.0991 7.51525 12.1971 7.55333 12.2885C7.59141 12.3799 7.6472 12.4629 7.7175 12.5326C7.78722 12.6029 7.87017 12.6587 7.96157 12.6967C8.05296 12.7348 8.15099 12.7544 8.25 12.7544C8.34901 12.7544 8.44704 12.7348 8.53843 12.6967C8.62983 12.6587 8.71278 12.6029 8.7825 12.5326L11.7825 9.53258C11.8508 9.46125 11.9043 9.37714 11.94 9.28508C12.015 9.10248 12.015 8.89767 11.94 8.71508C11.9043 8.62301 11.8508 8.5389 11.7825 8.46758L8.7825 5.46757C8.71257 5.39765 8.62955 5.34218 8.53819 5.30433C8.44682 5.26648 8.34889 5.24701 8.25 5.24701C8.15111 5.24701 8.05318 5.26648 7.96181 5.30433C7.87045 5.34218 7.78743 5.39765 7.7175 5.46757C7.64757 5.5375 7.5921 5.62052 7.55426 5.71189C7.51641 5.80325 7.49693 5.90118 7.49693 6.00007C7.49693 6.09897 7.51641 6.1969 7.55426 6.28826C7.5921 6.37963 7.64757 6.46265 7.7175 6.53257L9.4425 8.25008H2.25C2.05109 8.25008 1.86032 8.32909 1.71967 8.46975C1.57902 8.6104 1.5 8.80116 1.5 9.00008C1.5 9.19899 1.57902 9.38975 1.71967 9.53041C1.86032 9.67106 2.05109 9.75008 2.25 9.75008H9.4425ZM9 1.50007C7.59832 1.49382 6.22293 1.88048 5.02985 2.61622C3.83677 3.35195 2.87374 4.40731 2.25 5.66257C2.16049 5.8416 2.14576 6.04884 2.20905 6.23872C2.27235 6.4286 2.40848 6.58556 2.5875 6.67507C2.76652 6.76459 2.97377 6.77931 3.16365 6.71602C3.35353 6.65273 3.51049 6.5166 3.6 6.33757C4.07414 5.38007 4.79537 4.56654 5.68916 3.98107C6.58295 3.39559 7.61687 3.05941 8.68407 3.00727C9.75127 2.95512 10.813 3.18891 11.7596 3.68446C12.7062 4.18001 13.5034 4.91935 14.0686 5.82607C14.6338 6.7328 14.9467 7.77401 14.9748 8.84211C15.0029 9.91022 14.7453 10.9665 14.2286 11.9017C13.7119 12.8369 12.9549 13.6172 12.0357 14.1619C11.1164 14.7066 10.0685 14.996 9 15.0001C7.88166 15.0049 6.78462 14.6943 5.83477 14.104C4.88492 13.5137 4.12077 12.6675 3.63 11.6626C3.54049 11.4836 3.38353 11.3474 3.19365 11.2841C3.00377 11.2208 2.79652 11.2356 2.6175 11.3251C2.43848 11.4146 2.30235 11.5715 2.23905 11.7614C2.17576 11.9513 2.19049 12.1586 2.28 12.3376C2.87462 13.5342 3.77814 14.5503 4.8971 15.2806C6.01607 16.011 7.30984 16.4291 8.64459 16.4918C9.97935 16.5545 11.3066 16.2595 12.4891 15.6372C13.6716 15.0149 14.6664 14.0881 15.3706 12.9524C16.0747 11.8168 16.4627 10.5137 16.4944 9.17783C16.526 7.84198 16.2002 6.52192 15.5507 5.3542C14.9011 4.18648 13.9514 3.2135 12.7997 2.5359C11.648 1.85831 10.3362 1.5007 9 1.50007Z"
              fill="#58423A"
            />
          </svg>
        </Button>
      </div>
      <div className="w-full max-w-full min-w-full">
      <RemainedDays term={term} />
      </div>
      <div className={classNames("w-full ")}>
        <div className="w-full flex justify-center items-center px-10">
          <TermSelect />
        </div>
        <div className="w-full overflow-y-auto">
          {/* <TermData /> */}
          <SessionList term={term} />
        </div>
      </div>
    </div>
  );
};

export default TermController;
