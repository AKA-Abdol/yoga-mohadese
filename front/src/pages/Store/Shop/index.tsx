import { FC, useContext, useEffect, useState } from "react";
import ShopCourseCard from "./components/ShopCourseCard";
import Loading from "src/components/ui/Loading";
import Header from "src/components/Header";
import ShopItemBG1 from "src/assets/images/shopItem1.png";
import ShopItemBG2 from "src/assets/images/shopItem2.png";
import ShopItemBG3 from "src/assets/images/shopItem3.png";
import { Link } from "react-router-dom";
import { IShopCourseCard } from "./types";
import { IShopData } from "./api.types";
const BgList = [ShopItemBG1, ShopItemBG2, ShopItemBG3];

interface IShop {
  userData: any;
  shopData: IShopData;
  addToBasket: (itemId: string) => void;
  deleteFromBasket: (itemId: string) => void;
}

const Shop: React.FC<IShop> = ({
  userData,
  shopData,
  addToBasket,
  deleteFromBasket,
}) => {
  return (
    <main className="max-w-[100vw] w-[100vw] min-w-[100vw]">
      <Header />
      {userData.isSuccess ? (
        <div className="pt-28 mx-8 justify-center items-center">
          {shopData.courses.map((item) => (
            <ShopCourseCard
              level={item.detail.level}
              id={item.id}
              key={item.id}
              title={item.detail.title}
              price={item.detail.price}
              // month={currentJalaliMonth}
              addToBasket={addToBasket}
              deleteFromBasket={deleteFromBasket}
              // BGthumbURL={item.images[0]}
              BGthumbURL={BgList[item.detail.level + 1]} // for now that we dont have images it should be fine
            />
          ))}
        </div>
      ) : userData.isLoading ? (
        <Loading size="md" />
      ) : (
        <div className="w-full h-[100vh] flex items-center justify-center px-12">
          <Link to="/auth" className=" text-center text-[#58423A]">
            برای خرید دوره ها ابتدا باید
            <span className=" underline text-[#D48B71]"> وارد </span> حساب
            کاربری خود شوید.
          </Link>
        </div>
      )}
    </main>
  );
};

export default Shop;
