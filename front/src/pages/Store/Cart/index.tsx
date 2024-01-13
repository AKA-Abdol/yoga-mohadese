import Header from "src/components/Header";
import { ICartItem, ISubmitOrderRes } from "../api.types";
import CartItem from "./component/CartItem";
import {
  English2Persian,
  insertDelimEveryThreeDigits,
  addToman,
} from "src/utils/convertors";
import { useCallback, useContext, useState } from "react";
import { StoreContext } from "../StoreContext";
import { SUBMIT_ORDER_URL } from "../api.data";
import api from "src/services";
import { Link } from "react-router-dom";
import Loading from "src/components/ui/Loading";
import { ToastContainer, toast } from "react-toastify";
import LoginNeeded from "../components/LoginNeeded";

const Cart: React.FC = ({}) => {
  const [redirectingStatus, setRedirectingStatus] = useState<
    "loading" | "notRedirected"
  >("notRedirected");

  const { cartData, isCartSuccess, userData, isUserLoading } =
    useContext(StoreContext);

  const calculateTotalPay = (cartItems: ICartItem[]): number => {
    return cartItems.reduce((total, item) => total + item.overallPrice, 0);
  };

  const submitOrder = useCallback(() => {
    setRedirectingStatus("loading");
    const res = api.post<any, ISubmitOrderRes>(SUBMIT_ORDER_URL)({
      gateway: "zarinpal",
    });
    res
      .then((response) => {
        console.log(response);

        if (response) {
          window.location.replace(`${response}`);
        }
      })
      .catch((err) => {
        // console.log("THIS SHOULD BE POST ERROR FOR REDIRECTING", err);
        toast.error("به درگاه پرداخت منتقل نشدید لطفا دوباره تلاش کنید", {
          theme: "colored",
        });
        setRedirectingStatus("notRedirected");
      });
  }, []);

  return (
    <main className="w-screen h-screen ">
      <Header />
      <ToastContainer position="top-center" rtl={true} theme="light" />
      <div className="pt-32 px-12 flex flex-col gap-6">
        {isUserLoading ? (
          <Loading />
        ) : userData === undefined ? (
          <LoginNeeded />
        ) : (
          <>
            <h4 className="text-brown text-xl ">فاکتور</h4>
            <div className="border rounded-[8px] border-brown p-2">
              {isCartSuccess &&
                cartData?.map((item) => (
                  <CartItem
                    key={item.product.id}
                    level={item.product.detail.level}
                    month={item.product.detail.start_date}
                    price={item.overallPrice}
                    title={item.product.title}
                  />
                ))}
              <div className="flex justify-between pt-1">
                <h5 className="text-brown text-base">مجموع</h5>
                <h5 className="text-brown text-base ">
                  {cartData &&
                    addToman(
                      English2Persian(
                        insertDelimEveryThreeDigits(calculateTotalPay(cartData))
                      )
                    )}
                </h5>
              </div>
            </div>
          </>
        )}
        {userData && redirectingStatus === "notRedirected" && (
          <button
            onClick={submitOrder}
            className="btn-primary-theme py-sm w-full md:w-1/2 self-center"
          >
            "پرداخت"
          </button>
        )}
        {userData && redirectingStatus === "loading" && (
          <div className="flex flex-col justify-center items-center fixed w-screen h-screen top-0 right-0 bg-[#FEFAF7] text-brown">
            <p>شما در حال انتقال به درگاه پرداخت هستید</p>
            <Loading size="lg" />
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
