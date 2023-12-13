import { FC, useContext, useEffect, useState } from "react";
import ShopCourseCard from "./components/ShopCourseCard";
import { useQuery } from "@tanstack/react-query";
import { SHOP_ADD_ITEM_URL, SHOP_URL } from "./api.data";
import api from "src/services";
import { IShopItem } from "./api.types";
import Loading from "src/components/ui/Loading";
import Header from "src/components/Header";
import ShopItemBG1 from "src/assets/images/shopItem1.png";
import ShopItemBG2 from "src/assets/images/shopItem2.png";
import ShopItemBG3 from "src/assets/images/shopItem3.png";

/* THIS SECTION IS SORT OF MOCK LATER ON WE HANDLE THIS USING DATA COMMING FROM BACK */
/* DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN DOWN */
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DateObject from "react-date-object";
import { MyContext } from "src/components/layout/BodyLayout";
import { Link } from "react-router-dom";
const date = new DateObject({ calendar: persian, locale: persian_fa });
const currentJalaliMonth = date.month.name;
/* ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE ABOVE */
/* THIS SECTION IS SORT OF MOCK LATER ON WE HANDLE THIS USING DATA COMMING FROM BACK */

const BgList = [ShopItemBG1, ShopItemBG2, ShopItemBG3];

const Shop: FC = () => {
  const userData = useQuery({
    queryKey: ["my-data"],
    queryFn: api.get("user/my"),
    retry: 1,
  });

  const [shopList, setShopList] = useState<{
    count: number;
    courses: IShopItem[];
  }>();
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["shop", page],
    queryFn: api.get<{
      count: number;
      courses: IShopItem[];
    }>(`${SHOP_URL}`),
  });
  useEffect(() => {
    setShopList(data);
  }, [data]);

  const addToBasket = (itemId: string): void => {
    const shoppedItem = {
      itemId: itemId,
      quantity: 1,
    };
    api.post(`${SHOP_ADD_ITEM_URL}`)(shoppedItem);
    // also on add to basket we need a raect toastify to say your item added to your basket
  };
  
  return (
    <main className="max-w-[100vw] w-[100vw] min-w-[100vw]">
      <Header />
      {userData.isSuccess ? (
        <div className="pt-28 mx-8 justify-center items-center">
          {isLoading ? (
            <Loading />
          ) : (
            data &&
            data.courses.map((item) => (
              <ShopCourseCard
                level={item.detail.level}
                id={item.id}
                key={item.id}
                title={item.detail.title}
                price={item.detail.price}
                month={currentJalaliMonth}
                addToBasket={addToBasket}
                // BGthumbURL={item.images[0]}
                BGthumbURL={BgList[item.detail.level + 1]} // for now that we dont have images it should be fine
              />
            ))
          )}
        </div>
      ) : userData.isLoading ? (
        <Loading size="md" />
      ) : (
        <div className="w-full h-[100vh] flex items-center justify-center px-12">
          <Link to="/auth" className=" text-center text-[#58423A]">
            برای خرید دوره ها ابتدا باید
            <span className=" underline text-[#D48B71]"> وارد </span> حساب کاربری خود شوید.
          </Link>
        </div>
      )}
    </main>
  );
};

export default Shop;
