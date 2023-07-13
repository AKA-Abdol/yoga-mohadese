import { CardProps } from "@/types/components/ui";
import classNames from "classnames";
import { FC } from "react";

const Card: FC<CardProps> = (props) => {
  return (
    <div
      className={classNames(
        "bg-primary-light text-primary-dark shadow-lg rounded-md",
        `flex flex-${props.flexDirection} justify-${props.justify} items-center`,
        "p-2",
        props.classnames
      )}
    >
      {props.children}
    </div>
  );
};

export default Card;
