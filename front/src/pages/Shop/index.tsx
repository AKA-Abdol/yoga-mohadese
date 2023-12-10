import { FC } from "react";
import ShopCourseCard from "./components/ShopCourseCard";
import { useQuery } from "@tanstack/react-query";

const Store: FC = () => {
  const termData = useQuery({
    queryKey: ["terms"]
  })

  return (
    <div>
        <ShopCourseCard title={"asd"} price={0} month={"asd"} BGthumbURL={"asd"} setIsCardActive={undefined} />
    </div>
  );
};

export default Store;
