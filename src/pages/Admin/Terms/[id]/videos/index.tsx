import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import TermInfo from "./components/TermInfo";
import Button from "src/components/ui/Button";
import VideoItem from "./components/VideoItem";
import AddVideoItem from "./components/AddVideoItem";
import { AddStateType, IVideo, WithVideos } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "src/services";
import { WithId } from "src/types/base";
import { ITermApi } from "src/pages/Admin/types";
import { TERM_URL } from "src/pages/Admin/api.data";
import Loading from "src/components/ui/Loading";
import { BASE_TERM_URL } from "../../api.data";
import { TERM_VIDEO_URL } from "./api.data";

const TermById: FC = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const term = useQuery({
    queryKey: ["term-videos", "term"],
    queryFn: api.get<{ course: WithId & ITermApi & WithVideos }>(
      `${TERM_URL}/${id}`
    ),
  });

  const addVideo = useMutation(
    api.post<IVideo, unknown>(`${BASE_TERM_URL}/${id}/${TERM_VIDEO_URL}`)
  );

  const [addState, setAddState] = useState<AddStateType>("readyToAdd");

  if (addVideo.isSuccess) queryClient.invalidateQueries(["term-videos"]);

  if (term.isLoading || term.isError || !term.data)
    return <Loading size="lg" />;

  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 py-md">
        <TermInfo
          id={id ?? term.data.course.id}
          title={term.data.course.title}
          description={term.data.course.description}
          level={term.data.course.level}
        />
      </div>
      <div className="w-full lg:w-3/5 py-md flex flex-col space-y-sm">
        {term.data.course.videos
          .sort((first, second) => first.num - second.num)
          .map((video) => (
            <VideoItem link={video.link} num={video.num} title={video.title} />
          ))}
        {addState === "adding" && (
          <AddVideoItem
            onCancel={() => setAddState("readyToAdd")}
            onSubmit={(video: IVideo) => {
              addVideo.mutate(video);
              setAddState("readyToAdd");
            }}
          />
        )}
        <Button
          className="btn-primary-theme w-full"
          onClick={() => setAddState("adding")}
        >
          + ایجاد ویدیو جدید
        </Button>
      </div>
    </div>
  );
};

export default TermById;
