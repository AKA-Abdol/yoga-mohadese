import { FC, useContext, useEffect, useState } from "react";
import ShopCourseCard from "./components/ShopCourseCard";
import Loading from "src/components/ui/Loading";
import Header from "src/components/Header";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import api from "src/services";
import { SHOP_ADD_ITEM_URL, SHOP_DELETE_ITEM_URL } from "../api.data";
import { IShopDataItem } from "../api.types";
import { IShopItemStatus } from "./types";
import { useQueryClient } from "@tanstack/react-query";
import LoginNeeded from "../components/LoginNeeded";

const Shop: React.FC = ({}) => {
  const {
    shopData,
    cartData,
    isShopLoading,
    isCartSuccess,
    isShopSuccess,
    userData,
    isUserLoading,
  } = useContext(StoreContext);

  const queryClient = useQueryClient();

  const [shopItemsStatusList, setShopItemsStatusList] =
    useState<IShopItemStatus[]>();

  const isItemInCard = (shopItem: IShopDataItem) => {
    if (shopItem.hasAccess) return "purchased";
    const thisItemIsInCart =
      cartData &&
      cartData.find((cartItem) => cartItem.product.id === shopItem.id);
    if (thisItemIsInCart && thisItemIsInCart.quantity > 0) {
      return "inCart";
    } else {
      return "available";
    }
  };

  useEffect(() => {
    if (isShopSuccess && isCartSuccess) {
      if (shopData) {
        const listOfStatuses = shopData.courses.map((item) => ({
          id: item.id,
          availability: isItemInCard(item),
          isLoading: false,
        }));
        setShopItemsStatusList(listOfStatuses as IShopItemStatus[]);
      }
    }
  }, [isCartSuccess, isShopSuccess]);

  const updateItemsStatus = (id: string) => {
    const updatedList =
      shopItemsStatusList &&
      shopItemsStatusList.map((item) =>
        id === item.id
          ? item.availability === "available"
            ? { ...item, availability: "inCart" }
            : { ...item, availability: "available" }
          : item
      );
    setShopItemsStatusList(updatedList as IShopItemStatus[]);
  };

  const changeLoadingStatus = (id: string, to: boolean) => {
    const updatedList =
      shopItemsStatusList &&
      shopItemsStatusList.map((item) =>
        item.id === id ? { ...item, isLoading: to } : item
      );
    setShopItemsStatusList(updatedList as IShopItemStatus[]);
  };

  const onQuantityChange = (action: "add" | "delete", id: string) => {
    return (itemId: string) => {
      changeLoadingStatus(id, true);
      const apiCall =
        action === "add"
          ? api.post(`${SHOP_ADD_ITEM_URL}/${itemId}`)({})
          : api.delete(`${SHOP_DELETE_ITEM_URL}/${itemId}`)({});
      apiCall
        .then((res) => {
          // console.log(res);
          changeLoadingStatus(id, false);
          updateItemsStatus(id);
          queryClient.invalidateQueries(["cart"]);
        })
        .catch((err) => {
          changeLoadingStatus(id, false);
          // console.log("API CALL CART ACTION ERR", err);
        });
    };
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center ">
      <Header />
      {isUserLoading ? (
        <Loading />
      ) : userData == undefined ? (
        <LoginNeeded />
      ) : (
        <div className="pt-28 mx-12 justify-center items-center flex flex-col gap-y-4 lg:justify-start lg:gap-8 lg:flex-row lg:flex-wrap">
          {isShopLoading ? (
            <Loading />
          ) : isShopSuccess && shopData && cartData && shopItemsStatusList ? (
            shopData.courses.map((item, index) => (
              <ShopCourseCard
                status={shopItemsStatusList[index]}
                index={index}
                id={item.id}
                key={item.id}
                onQuantityChange={onQuantityChange}
              />
            ))
          ) : (
            "در حال حاضر دوره فعالی نداریم بعدا به ما سر بزنید."
          )}
        </div>
      )}
    </main>
  );
};

export default Shop;
