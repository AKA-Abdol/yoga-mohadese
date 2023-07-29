import classNames from "classnames";
import { FC } from "react";
import { BadgeProps } from "src/types/components/ui";

const Badge: FC<BadgeProps> = (props) => {
  return (
    <div className={classNames("badge badge-outline", props.className)}>
      {props.children}
    </div>
  );
};

export default Badge;
