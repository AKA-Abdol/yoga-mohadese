import api from "../../../../services";
import { useQuery } from "@tanstack/react-query";
import { FC, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { ITerm } from "../add/types";
import { apiTerm2local } from "./api.converter";
import { BASE_TERM_VIDEOS_URL } from "./api.data";
import TermInfo from "./components/TermInfo";
import Button from "../../../../components/ui/Button";
import VideoItem from "./components/VideoItem";
import AddVideoItem from "./components/AddVideoItem";
import { IVideo } from "./types";

type AddStateType = "adding" | "readyToAdd";

const TermById: FC = () => {
  const { id } = useParams();
  // const term = useQuery({
  //   queryKey: ["term", "term-data", id],
  //   queryFn: api.get<ITerm & { id: string }>(
  //     `${BASE_TERM_VIDEOS_URL}/${id}`,
  //     apiTerm2local
  //   ),
  // });
  // if (term.isLoading || term.isError || !term.data) return <></>;

  const term = {
    data: {
      title: "عنوان ترم",
      description: "توضیحات ترم",
    },
  };

  const [videos, setVideos] = useState<IVideo[]>(MOCK_VIDEOS);
  const addVideo = useCallback(
    (video: IVideo) =>
      setVideos((prevVideos) => [
        ...prevVideos,
        {
          link: video.link,
          num: video.num,
          title: video.title,
        },
      ]),
    [setVideos]
  );
  const [addState, setAddState] = useState<AddStateType>("readyToAdd");

  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 py-md">
        <TermInfo title={term.data.title} description={term.data.description} />
      </div>
      <div className="w-full lg:w-3/5 py-md flex flex-col space-y-sm">
        {videos
          .sort((first, second) => first.num - second.num)
          .map((video) => (
            <VideoItem link={video.link} num={video.num} title={video.title} />
          ))}
        {addState === "adding" && (
          <AddVideoItem
            onCancel={() => setAddState("readyToAdd")}
            onSubmit={(video: IVideo) => {
              addVideo(video);
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

const MOCK_VIDEOS: IVideo[] = [
  { num: 3, title: "کشش اولیه", link: "http://www.google.com" },
  { num: 1, title: "کشش ثانویه", link: "http://www.google.com" },
];

export default TermById;
