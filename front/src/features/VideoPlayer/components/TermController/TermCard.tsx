import React from "react";
import { ITerm } from "src/pages/Admin/Terms/add/types";
import { WithId } from "src/types/base";
import termCardBg1 from "src/assets/images/termCardBg1.png";
import termCardBg2 from "src/assets/images/termCardBg2.png";
import termCardBg3 from "src/assets/images/termCardBg3.png";

interface ITermCard {
  term: WithId & ITerm;
  index: number;
  onSelectTerm: (e: any) => void;
}

const backgrounds = [termCardBg1, termCardBg2, termCardBg3];

const TermCard: React.FC<ITermCard> = ({ term, index, onSelectTerm }) => {
  return (
    <div
      onClick={onSelectTerm}
      className="w-full rounded-[8px] bg-[#383838] min-h-[150px] h-[150px] max-h-[150px] p-3 flex flex-col gap-2 relative"
    >
      <img
        src={backgrounds[index % 3]}
        alt="thumbnail"
        className=" absolute top-0 right-0 w-full h-full object-cover rounded-[8px] opacity-30"
      />
      <p className=" text-sm text-[#FEF3E9B2] mb-auto">10 جلسه</p>
      <h3 className=" text-lg text-[#FEF3E9] ]">{term.title}</h3>
      <p className="text-sm text-[#FEF3E9B2]">{term.description}</p>
    </div>
  );
};

export default TermCard;
