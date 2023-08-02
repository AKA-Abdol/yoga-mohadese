import { FC, createContext } from "react";
import { ApiTermSchema, IVideoContext } from "./types";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { TERM_URL } from "src/pages/Admin/api.data";
import { Outlet } from "react-router-dom";
import { apiTerm2local } from "src/pages/Admin/api.converter";

export const VideoContext = createContext<IVideoContext>({ terms: undefined });

const VideoContextProvider: FC = () => {
    const termData = useQuery({
        queryKey: ["video-terms", "term", "term-list"],
        queryFn: api.get<ApiTermSchema>(TERM_URL),
      });
    
      return (
        <VideoContext.Provider
          value={{
            terms: termData.data
              ? termData.data.values.map(apiTerm2local)
              : undefined,
          }}
        >
          <Outlet />
        </VideoContext.Provider>
      );
};

export default VideoContextProvider;
