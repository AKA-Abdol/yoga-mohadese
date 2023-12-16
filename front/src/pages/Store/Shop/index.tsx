import { FC, useContext, useEffect, useState } from "react";
import ShopCourseCard from "./components/ShopCourseCard";
import Loading from "src/components/ui/Loading";
import Header from "src/components/Header";
import ShopItemBG1 from "src/assets/images/shopItem1.png";
import ShopItemBG2 from "src/assets/images/shopItem2.png";
import ShopItemBG3 from "src/assets/images/shopItem3.png";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreContext";
const BgList = [ShopItemBG1, ShopItemBG2, ShopItemBG3];

const Shop: React.FC = ({}) => {
  // handle add to basket and handle delete from basket needed in here
  const {
    shopData,
    isShopError,
    isShopLoading,
    isShopSuccess,
    userData,
    isUserLoading,
  } = useContext(StoreContext);

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
        <div className="pt-28 mx-8 justify-center items-center">
          {shopData?.courses.map((item) => (
            <ShopCourseCard
              level={item.detail.level}
              id={item.id}
              key={item.id}
              title={item.detail.title}
              price={item.detail.price}
              // month={currentJalaliMonth}
              // addToBasket={addToBasket}
              // deleteFromBasket={deleteFromBasket}
              // BGthumbURL={item.images[0]}
              BGthumbURL={BgList[item.detail.level + 1]} // for now that we dont have images it should be fine
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Shop;
