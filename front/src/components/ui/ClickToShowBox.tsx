import React, { ReactNode, useEffect, useState } from "react";

interface IClickToShowBox {
  title: string | ReactNode;
  content: string;
  index?: number;
  titleClassNames?: string;
  boxClassNames?: string;
  contentClassNames?: string;
  backgroundColor?: string;
}

const ClickToShowBox: React.FC<IClickToShowBox> = ({
  title,
  content,
  index,
  titleClassNames,
  boxClassNames,
  contentClassNames,
  backgroundColor = "none",
}) => {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  useEffect(() => {
    if (index === 0) setIsExtended(true);
  }, []);

  return (
    <div
      onClick={() => setIsExtended((prev) => !prev)}
      className={`flex flex-col px-4 py-1 justify-center transition-all duration-300 cursor-pointer ${
        boxClassNames
          ? boxClassNames
          : "text-[#58423A] rounded-[8px] border border-[#58423A]"
      }  ${isExtended ? `bg-[${backgroundColor}] bg-opacity-30` : "bg-none"}`}
    >
      <h4 className={`${titleClassNames ? titleClassNames : "text-base"}`}>
        {title}
      </h4>
      <p
        className={`transition-all duration-300  ${
          isExtended ? `${contentClassNames} pt-2` : "text-[0px] mt-0 opacity-0"
        }`}
      >
        {content}
      </p>
    </div>
  );
};

export default ClickToShowBox;
