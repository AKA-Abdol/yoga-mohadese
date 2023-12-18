import Header from "src/components/Header";
import { ICartItem, ISubmitOrderRes } from "../api.types";
import FactorItem from "./component/FactorItem";
import {
  English2Persian,
  addCommaEach3Digits,
  addToman,
} from "src/utils/converts";
import { useContext } from "react";
import { StoreContext } from "../StoreContext";
import { SUBMIT_ORDER_URL } from "../api.data";
import api from "src/services";
import { redirect, useNavigate } from "react-router-dom";

const Cart: React.FC = ({}) => {
  const navigate = useNavigate();
  const { cartData, isCartError, isCartLoading, isCartSuccess } =
    useContext(StoreContext);

  const totalOverallPrice = (cartItems: ICartItem[]): number => {
    return cartItems.reduce((total, item) => total + item.overallPrice, 0);
  };

  const submitOrder = () => {
    const res = api.post<any, ISubmitOrderRes>(SUBMIT_ORDER_URL)({});
    res.then((response) => {
      if (response.paymentLink) {
        console.log(
          "WE ARE GETTING IN REDIRECTING PROCCESS",
          response.paymentLink
        );
        navigate(`${response.paymentLink}`);
      }
    });
  };

  return (
    <main>
      <Header />
      <div className="pt-32 px-12 flex flex-col gap-6">
        <h4 className="text-[#58423a] text-xl ">فاکتور</h4>
        <div className="border rounded-[8px] border-[#58423A] p-2">
          {isCartSuccess &&
            cartData?.map((item) => (
              <FactorItem
                level={item.product.detail.level}
                month={item.product.detail.start_date}
                price={item.overallPrice}
                title={item.product.title}
              />
            ))}
          <div className="flex justify-between pt-1">
            <h5 className="text-[#58423A] text-base">مجموع</h5>
            <h5 className="text-[#58423A] text-base ">
              {cartData &&
                addToman(
                  English2Persian(
                    addCommaEach3Digits(totalOverallPrice(cartData))
                  )
                )}
            </h5>
          </div>
        </div>
        <button
          onClick={() => submitOrder()}
          className="bg-[#D48B71] rounded-[32px] w-full py-4 text-[#fff] text-2xl  "
        >
          پرداخت
        </button>
      </div>
    </main>
  );
};

export default Cart;
