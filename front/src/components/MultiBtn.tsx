import { ContentPair } from "src/types/base";
import { useState } from "react";

export type MultiBtnContentPair = ContentPair<string>;

interface IMultiBtnProps {
  contents: MultiBtnContentPair[];
}

export default function MultiBtn({ contents }: IMultiBtnProps) {
  const buttonNames = contents.map((content) => content.data);
  const contentTexts = contents.map((content) => content.content);

  const [contentState, setContentState] = useState(0);
  return (
    <div className="flex flex-col gap-4 w-[100vw] justify-center items-center">
      <div className="flex flex-col gap-4 w-3/4">
        {buttonNames.map((text, index) => (
          <button
            className=" border border-[#58423A] text-[#58423A] rounded-[24px] p-4 text-2xl bg-[#ffffff50]"
            onClick={() => setContentState(index)}
          >
            {text}

            <p
              className={`text-justify leading-6 transition-all duration-300 ${
                contentState === index ? "text-[14px] p-4" : "text-[0px] h-0"
              }`}
            >
              {contentTexts[contentState]}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
