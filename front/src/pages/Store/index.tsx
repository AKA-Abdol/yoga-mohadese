import { FC, useEffect } from "react";
import StoreContextProvider from "./StoreContext";
import Shop from "./Shop";
import Cart from "./Cart";
import { Default } from "react-toastify/dist/utils";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";

const Store: FC = () => {
  return (
    <StoreContextProvider>
      <Shop />
      <Cart />
    </StoreContextProvider>
  );
};

export default Store;
