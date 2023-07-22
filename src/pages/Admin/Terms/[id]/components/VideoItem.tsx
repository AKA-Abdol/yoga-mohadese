import LinkButton from "../../../../../components/ui/LinkButton";
import { FC } from "react";
import { VideoItemProps } from "./types";
import Card from "../../../../../components/ui/Card";

const VideoItem: FC<VideoItemProps> = (props) => {
  return (
    <Card flexDirection="row" justify="between" classnames={`h-14`}>
      <div className="h-full w-16 flex justify-center items-center rounded-md border-normal border-primary-dark">
        <p className="text-xl text-center">
          <u>{props.num}</u>
        </p>
      </div>
      <p className="w-full text-center text-sm">{props.title}</p>

      <div className={"h-full w-24 flex flex-row"}>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <LinkButton />
        </a>
      </div>
    </Card>
  );
};

export default VideoItem;
