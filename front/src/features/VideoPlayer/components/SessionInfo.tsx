import { FC } from "react";
import { SessionInfoProps } from "./types";

const SessionInfo: FC<SessionInfoProps> = (props) => {
  return (
    <div
      className={`w-full h-32 flex flex-row justify-between items-center text-primary-light`}
    >
      <Title>جلسه</Title>
      <div className="h-full flex flex-col justify-around">
        <p>عنوان جلسه</p>
        <p>شماره جلسه</p>
      </div>
      <Title>جلسه</Title>
      <div className="h-full flex flex-col justify-around">
        <p>عنوان جلسه</p>
        <p>شماره جلسه</p>
      </div>
    </div>
  );
};

const Title = (props: { children: string }) => {
  return (
    <div className="flex items-center h-full text-2xl bg-primary-light text-primary-dark px-sm rounded-r-lg">
      <p>{props.children}</p>
    </div>
  );
};

export default SessionInfo;
