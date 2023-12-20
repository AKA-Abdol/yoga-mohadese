import { FC, useContext, useEffect, useState } from "react";
import ShopCourseCard from "./components/ShopCourseCard";
import Loading from "src/components/ui/Loading";
import Header from "src/components/Header";
import ShopItemBG1 from "src/assets/images/shopItem1.png";
import ShopItemBG2 from "src/assets/images/shopItem2.png";
import ShopItemBG3 from "src/assets/images/shopItem3.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";
import api from "src/services";
import { SHOP_ADD_ITEM_URL, SHOP_DELETE_ITEM_URL } from "../api.data";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICartItem, IShopData } from "../api.types";
import { CourseAvailability } from "./types";
import { error } from "console";
const BgList = [ShopItemBG1, ShopItemBG2, ShopItemBG3];

const Shop: React.FC = ({}) => {
  const {
    shopData,
    cartData,
    isShopError,
    isShopLoading,
    isShopSuccess,
    userData,
    isUserLoading,
  } = useContext(StoreContext);
  const [itemsAvailabilityList, setItemsAvailabilityList] = useState<
    Array<CourseAvailability>
  >([]);

  const onQuantityChange = (itemId: string, index: number) => {
    return () => {
      api.post(`${SHOP_ADD_ITEM_URL}/${itemId}`)({});
      updateStatus(index);
    };
  };


  const updateStatus = (itemIndex: number) => {
    const newStatus = itemsAvailabilityList.map((item, index) =>
      index === itemIndex
        ? item === "purchased"
          ? "purchased"
          : item === "selected"
          ? "available"
          : "selected"
        : item
    );
    setItemsAvailabilityList(newStatus);
  };
  const addToCart = (itemId: string, index: number) => {
    api.post(`${SHOP_ADD_ITEM_URL}/${itemId}`)({});
    updateStatus(index);
  };
  const deleteFromCart = (itemId: string, index: number): void => {
    api.delete(`${SHOP_ADD_ITEM_URL}/${itemId}`)({});
    updateStatus(index);
  };
  const findItemStatus = (shopData: IShopData, cartData: ICartItem[]) => {
    const cartCoursesId = cartData.map((item) => item.product.id);
    const courseAvailability = shopData.courses.map((course) => {
      if (course.hasAccess) {
        return "purchased";
      } else if (cartCoursesId.includes(course.id)) {
        return "selected";
      } else {
        return "available";
      }
    });
    return courseAvailability;
  };
  useEffect(() => {
    if (shopData && cartData) {
      const shopItemsAvailabilityStatusList = findItemStatus(
        shopData,
        cartData
      );
      setItemsAvailabilityList(shopItemsAvailabilityStatusList);
    }
  }, [shopData, cartData]);

  return (
    <main className="max-w-[100vw] w-[100vw] min-w-[100vw]">
      <Header />
      {isUserLoading ? (
        <Loading />
      ) : userData == undefined ? (
        <div className="w-full h-[100vh] flex items-center justify-center px-12">
          <Link to="/auth" className=" text-center text-[#58423A]">
            برای خرید دوره ها ابتدا باید
            <span className=" underline text-[#D48B71]"> وارد </span> حساب
            کاربری خود شوید.
          </Link>
        </div>
      ) : (
        <div className="pt-28 mx-8 justify-center items-center flex flex-col gap-y-4 ">
          {isShopLoading ? (
            <Loading />
          ) : isShopSuccess && shopData ? (
            shopData.courses.map((item, index) => (
              <ShopCourseCard
                level={item.detail.level}
                id={item.id}
                key={item.id}
                title={item.detail.title}
                index={index}
                price={item.detail.price}
                itemStatus={itemsAvailabilityList[index]}
                backgroundTuhmbURL={BgList[item.detail.level + 1]}
                // addToCart={addToCart}
                onQuantityChange={() => onQuantityChange}
                // deleteFromCart={deleteFromCart}
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
