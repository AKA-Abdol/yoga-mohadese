import { FC, ReactNode, useEffect } from "react";
import StoreContextProvider from "./StoreContext";
import Shop from "./Shop";
import Cart from "./Cart";
import { useLocation } from "react-router-dom";

const Store: FC = () => {
  const location = useLocation();
  let page: ReactNode;
  if (location.pathname === "/store/shop") {
    page = <Shop />;
  }
  if (location.pathname === "/store/cart") {
    page = <Cart />;
  }

  return <StoreContextProvider>{page}</StoreContextProvider>;
};

export default Store;
