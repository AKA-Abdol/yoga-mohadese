import LinkButton from "../../../../../../components/ui/LinkButton";
import { FC } from "react";
import { VideoItemProps } from "./types";
import Card from "../../../../../../components/ui/Card";
import DeleteButton from "src/components/ui/DeleteButton";
import { WithId } from "src/types/base";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "src/services";

const VideoItem: FC<VideoItemProps & WithId> = (props) => {
  const deleteVideo = useMutation(api.delete(`videos/${props.id}`));
  const queryClient = useQueryClient();

  if (deleteVideo.isSuccess) {
    deleteVideo.reset();
    queryClient.invalidateQueries({ queryKey: ["term-videos-list"] });
  }

  return (
    <Card flexDirection="row" justify="between" classnames={`h-14`}>
      <div className="h-full w-16 flex justify-center items-center rounded-md border-normal border-brown">
        <p className="text-xl text-center">
          <u>{props.num}</u>
        </p>
      </div>
      <p className="w-full text-center text-sm">{props.title}</p>
      {/* <p className="w-full text-center text-sm">{props.description}</p> */}
      <div className={"h-full w-40 flex flex-row"}>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <LinkButton />
        </a>
        <DeleteButton
          onClick={() => {
            deleteVideo.mutate({});
          }}
        />
      </div>
    </Card>
  );
};

export default VideoItem;
