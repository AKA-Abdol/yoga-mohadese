import React, { useEffect, useState } from "react";

interface IClickToShowBox {
  title: string;
  content: string;
  index?: number;
  titleClassNames?: string;
  boxClassNames?: string;
}

const ClickToShowBox: React.FC<IClickToShowBox> = ({
  title,
  content,
  index,
  titleClassNames,
  boxClassNames
}) => {
  const [isExtended, setIsExtended] = useState<boolean>(false);
  useEffect(() => {
    if (index === 0) setIsExtended(true);
  }, []);
  return (
    <div
      onClick={() => setIsExtended((prev) => !prev)}
      className={`${boxClassNames} text-[#58423A] rounded-[8px] border border-[#58423A] flex flex-col p-3 justify-center transition-all duration-300 ${
        isExtended ? "bg-[#8ca78030]" : "bg-none"
      }`}
    >
      <h4 className={`text-base ${titleClassNames}`}>{title}</h4>
      <p
        className={`${
          isExtended ? "text-xs mt-2 opacity-100" : "text-[0px] mt-0 opacity-0"
        } transition-all duration-300`}
      >
        {content}
      </p>
    </div>
  );
};

export default ClickToShowBox;
