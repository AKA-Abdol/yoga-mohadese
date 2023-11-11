import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import TermInfo from "./components/TermInfo";
import Button from "src/components/ui/Button";
import VideoItem from "./components/VideoItem";
import AddVideoItem from "./components/AddVideoItem";
import { AddStateType, IVideo, WithThumbnail, WithVideos } from "./types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "src/services";
import { WithId } from "src/types/base";
import { ITermApi } from "src/pages/Admin/types";
import { TERM_URL } from "src/pages/Admin/api.data";
import Loading from "src/components/ui/Loading";
import { BASE_TERM_URL } from "../../api.data";
import { TERM_VIDEO_URL } from "./api.data";
import { makeTextShort } from "src/utils/textManuplator";
import { useTranslation } from "react-i18next";

const TermVideos: FC = () => {
  const {t} = useTranslation()
  const { id } = useParams();
  const queryClient = useQueryClient();
  const term = useQuery({
    queryKey: ["term-videos-list", "term"],
    queryFn: api.get<{ course: WithId & ITermApi & WithVideos }>(
      `${TERM_URL}/${id}`
    ),
  });

  const addVideo = useMutation(
    api.post<IVideo & WithThumbnail, unknown>(
      `${BASE_TERM_URL}/${id}/${TERM_VIDEO_URL}`
    )
  );

  const [addState, setAddState] = useState<AddStateType>("readyToAdd");

  if (addVideo.isSuccess)
    queryClient.invalidateQueries({ queryKey: ["term-videos-list"] });

  if (term.isLoading || term.isError || !term.data)
    return <Loading size="lg" />;

  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 py-md">
        <TermInfo
          id={id ?? term.data.course.id}
          title={term.data.course.title}
          description={makeTextShort(term.data.course.description, 40)}
          level={term.data.course.level}
        />
      </div>
      <div className="w-full lg:w-3/5 py-md flex flex-col space-y-sm">
        {term.data.course.videos
          .sort((first, second) => first.num - second.num)
          .map((video) => (
            <VideoItem
              link={video.link}
              num={video.num}
              title={video.title}
              id={video.id}
            />
          ))}
        {addState === "adding" && (
          <AddVideoItem
            onCancel={() => setAddState("readyToAdd")}
            onSubmit={(video: IVideo & WithThumbnail) => {
              addVideo.mutate(video);
              setAddState("readyToAdd");
            }}
          />
        )}
        <Button
          className="btn-primary-theme w-full"
          onClick={() => setAddState("adding")}
        >
          {t("adminTermIndex-addNewVideo")}
        </Button>
      </div>
    </div>
  );
};

export default TermVideos;
