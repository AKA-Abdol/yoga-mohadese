import SearchInput from "../../../components/ui/SearchInput";
import { FC, useCallback, useContext, useEffect, useState } from "react";
import TermItem from "./TermItem";
import Button from "../../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../ContextProvider";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "src/components/ui/Loading";
import Modal from "src/components/ui/Modal";
import DeleteModal from "./DeleteModal";
import {
  IDeleteModalState,
  TermItemProps,
  initialDeleteModalState,
} from "./types";

const Terms: FC = () => {
  const adminContext = useContext(AdminContext);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [modalState, setModalState] = useState<IDeleteModalState>(
    initialDeleteModalState
  );

  const closeModal = useCallback(() => {
    setModalState((prevState) => ({ ...prevState, show: false }));
  }, []);

  const invokeModalWith = useCallback((term: TermItemProps) => {
    setModalState({
      show: true,
      term,
    });
  }, []);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["admin-context"] });
  }, [queryClient]);

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
          adminContext.terms.length !== 0 ? (
            adminContext.terms.map((term) => (
              <TermItem
                title={term.title}
                level={term.level}
                id={term.id}
                description={term.description}
                range={term.range}
              />
            ))
          ) : (
            <p>ترمی یافت نشد!</p>
          )
        ) : (
          <Loading />
        )}
      </div>
      <DeleteModal
        show={modalState.show}
        term={modalState.term}
        onClose={closeModal}
      />
    </div>
  );
};

export default Terms;
