import { useCallback, useState } from "react";

type ModalState = "show" | "hidden";

const useModal = (initialModalState: ModalState = "hidden") => {
  const [viewState, setViewState] = useState<ModalState>("hidden");
  const handleClose = useCallback(() => setViewState("hidden"), []);
  const handleOpen = useCallback(() => setViewState("show"), []);

  return {
    viewState,
    handleClose,
    handleOpen,
  };
};

export default useModal;
