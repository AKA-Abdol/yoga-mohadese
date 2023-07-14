import SearchInput from "../../../components/ui/SearchInput";
import { FC } from "react";
import TermItem from "./TermItem";
import { Button } from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const Terms: FC = () => {
  const navigate = useNavigate();
  return (
    <div className={`w-full h-full p-sm flex flex-col items-center`}>
      <div className="w-full lg:w-3/5 flex flex-col justify-center items-center space-y-lg">
        <SearchInput />
        <Button
          className="btn-primary-theme"
          onClick={() => navigate("/admin/terms/add")}
        >
          + ایجاد ترم جدید
        </Button>
      </div>
      <div className="w-full lg:w-3/5 h-full flex flex-col space-y-sm py-md">
        {MOCK_TERMS.map((term) => (
          <TermItem title={term.title} />
        ))}
      </div>
    </div>
  );
};

const MOCK_TERMS = [
  {
    title: "بهار - ۱۴۰۱",
    // id
  },
  {
    title: "اردیبهشت - ۱۴۰۲",
  },
  {
    title: "اردیبهشت - ۱۴۰۲",
  },
  {
    title: "اردیبهشت - ۱۴۰۲",
  },
];

export default Terms;
