import SearchInput from "../../../components/ui/SearchInput";
import { FC, useContext, useEffect, useState } from "react";
import TermItem from "./TermItem";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../ContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "src/components/ui/Loading";
import Modal from "src/components/ui/Modal";

const Terms: FC = () => {
  const adminContext = useContext(AdminContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [modalState, setModalState] = useState(true);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["admin-context"] });
  }, [queryClient]);

  console.log("term: ", adminContext.terms);
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
      <div className="w-full lg:w-3/5 h-full flex flex-col space-y-sm py-md items-center">
        {adminContext.terms ? (
          adminContext.terms.count !== 0 ? (
            adminContext.terms.values.map((term) => (
              <TermItem title={term.title} level={term.level} id={term.id} />
            ))
          ) : (
            <p>ترمی یافت نشد!</p>
          )
        ) : (
          <Loading />
        )}
      </div>
      <Modal onClose={() => setModalState(false)} show={modalState}>
        <p className="bg-primary-dark p-lg">something to render</p>
      </Modal>
    </div>
  );
};

export default Terms;
