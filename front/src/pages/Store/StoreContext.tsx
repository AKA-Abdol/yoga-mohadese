import { useQuery } from "@tanstack/react-query";
import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
} from "react";
import api from "src/services";
import { ICartItem, IShopData } from "./api.types";
import { CART_URL, SHOP_URL } from "./api.data";

interface IStoreContextData {
  shopData?: IShopData;
  isShopError: boolean;
  isShopLoading: boolean;
  isShopSuccess: boolean;
  cartData?: ICartItem[];
  isCartError: boolean;
  isCartLoading: boolean;
  isCartSuccess: boolean;
  userData: any; //change it later on
  isUserLoading:boolean;
}

interface StoreContextProviderProps {
  children: React.ReactNode;
}

export const StoreContext = createContext<IStoreContextData>({
  shopData: { count: 0, courses: [] },
  isShopError: false,
  isShopLoading: false,
  isShopSuccess: false,
  cartData: [],
  isCartError: false,
  isCartLoading: false,
  isCartSuccess: false,
  userData: null, //change it later on
  isUserLoading: false,
});

const StoreContextProvider: React.FC<StoreContextProviderProps> = ({
  children,
}) => {
  const { data: userData, isLoading: isUserLoading } = useQuery({
    queryKey: ["userData"],
    queryFn: api.get("user/my"),
    retry: 1,
  });

  const {
    data: shopData,
    isError: isShopError,
    isLoading: isShopLoading,
    isSuccess: isShopSuccess,
  } = useQuery({
    queryKey: ["shop"],
    queryFn: api.get<IShopData>(SHOP_URL),
  });

  const {
    data: cartData,
    isError: isCartError,
    isLoading: isCartLoading,
    isSuccess: isCartSuccess,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: api.get<Array<ICartItem>>(CART_URL),
  });

  const contextValue = useMemo(
    () => ({
      shopData,
      isShopError,
      isShopLoading,
      isShopSuccess,
      cartData,
      isCartError,
      isCartLoading,
      isCartSuccess,
      userData,
      isUserLoading,
    }),
    [
      shopData,
      isShopError,
      isShopLoading,
      isShopSuccess,
      cartData,
      isCartError,
      isCartLoading,
      isCartSuccess,
      userData,
      isUserLoading,
    ]
  ); 

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default React.memo(StoreContextProvider);
