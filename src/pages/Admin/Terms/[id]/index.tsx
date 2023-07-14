import { FC } from "react";
import { useParams } from "react-router-dom";

const TermById: FC = () => {
  const { id } = useParams();
  return (
    <div className="w-full h-full flex justify-center items-center">
      this:{id}
    </div>
  );
};

export default TermById;
