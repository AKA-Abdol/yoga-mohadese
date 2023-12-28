import { FC, ReactNode, useEffect } from "react";
import StoreContextProvider from "./StoreContext";
import Shop from "./Shop";
import Cart from "./Cart";
import { Outlet, useLocation } from "react-router-dom";

const Store: FC = () => {
  return (
    <StoreContextProvider>
      <Outlet />
    </StoreContextProvider>
  );
};

export default Store;
