import { useQuery } from "@tanstack/react-query";
import React from "react";
import Header from "src/components/Header";
import { CART_URL } from "./api.data";
import api from "src/services";
import { ICartItem } from "./api.types";
import FactorItem from "./component/FactorItem";
import {
  English2Persian,
  addCommaEach3Digits,
  addToman,
} from "src/utils/converts";
const Cart = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["cart"],
    queryFn: api.get<Array<ICartItem>>(`${CART_URL}`),
  });

  const totalOverallPrice = (cartItems: ICartItem[]): number => {
    return cartItems.reduce((total, item) => total + item.overallPrice, 0);
  };

  return (
    <main>
      <Header />
      <div className="pt-32 px-12 flex flex-col gap-6">
        <h4 className="text-[#58423a] text-xl ">فاکتور</h4>
        <div className="border rounded-[8px] border-[#58423A] p-2">
          {data?.map((item) => (
            <FactorItem
              level={item.product.level}
              month={item.product.start_date}
              price={item.overallPrice}
              title={item.product.title}
            />
          ))}
          <div className="flex justify-between pt-1">
            <h5 className="text-[#58423A] text-base">مجموع</h5>
            <h5 className="text-[#58423A] text-base ">
              {data &&
                addToman(
                  English2Persian(addCommaEach3Digits(totalOverallPrice(data)))
                )}
            </h5>
          </div>
        </div>
        <button className="bg-[#D48B71] rounded-[32px] w-full py-4 text-[#fff] text-2xl  ">پرداخت</button>
      </div>
    </main>
  );
};

export default Cart;
