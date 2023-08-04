import { FC, ReactNode, createContext, useCallback, useState } from "react";
import { ApiTermSchema, IVideoContext } from "./types";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { TERM_URL } from "src/pages/Admin/api.data";
import { apiTerm2local } from "src/pages/Admin/api.converter";
import { WithChildren } from "src/types/components/ui";

export const VideoContext = createContext<IVideoContext>({
  terms: [],
  selected: {
    termId: undefined,
    sessionNum: undefined,
    setTermId: () => {},
    setSessionNum: () => {},
  },
});

const VideoContextProvider: FC<WithChildren<ReactNode>> = (props) => {
  const [controllerState, setControllerState] = useState<{
    termId: string | undefined;
    sessionNum: number | undefined;
  }>({
    termId: undefined,
    sessionNum: undefined,
  });
  const termData = useQuery({
    queryKey: ["video-terms", "term", "term-list"],
    queryFn: api.get<ApiTermSchema>(TERM_URL),
  });

  if (
    termData.isSuccess &&
    termData.data.count !== 0 &&
    !controllerState.termId
  ) {
    const terms = termData.data.values;
    if (terms.length !== 0)
      setControllerState((prevState) => ({
        ...prevState,
        termId: apiTerm2local(termData.data.values[0]).id,
      }));
  }

  const setTermId = useCallback(
    (termId: string | undefined) =>
      setControllerState((prevState) => ({ ...prevState, termId })),
    []
  );

  const setSessionNum = useCallback(
    (sessionNum: number | undefined) =>
      setControllerState((prevState) => ({ ...prevState, sessionNum })),
    []
  );

  return (
    <VideoContext.Provider
      value={{
        terms: termData.data ? termData.data.values.map(apiTerm2local) : [],
        selected: {
          termId: controllerState.termId,
          sessionNum: controllerState.sessionNum,
          setTermId,
          setSessionNum,
        },
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoContextProvider;
