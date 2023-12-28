import { useContext, useEffect, useState } from "react";
import homeIcon from "../assets/images/icon.png";
import styles from "./Header.module.css";
import BasketSVG from "src/assets/svgs/BasketSVG";
import { Link, useLocation } from "react-router-dom";
import NavbarLinks from "./ui/NavbarLinks";
import { useQuery } from "@tanstack/react-query";
import api from "src/services";
import { MyContext } from "./layout/BodyLayout";
export default function Header() {
  const location = useLocation();
  const [isMenuLight, setIsMenuLight] = useState<boolean>(false);
  const [menuState, setMenuState] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  const { firstname } = useContext(MyContext);

  useEffect(() => {
    if (location.pathname === "/contact") setIsMenuLight(true);
  }, []);

  function handleMenu() {
    setMenuState(!menuState);
    setShowSignIn(!showSignIn);
  }

  const linkObjects = [
    { value: "خانه", to: "/home" },
    { value: "ثبت نام / ورود", to: "/auth" },
    { value: "یوگا با محدثه", to: "/about" },
    { value: "فروشگاه", to: "/store/shop" },
    { value: "ثبت درخواست", to: "/ticket" },
    { value: "قوانین", to: "/terms" },
    { value: "ارتباط با ما", to: "/contact" },
    { value: "سوالات متداول", to: "/faq" },
  ];

  // You can now use the 'persianValues' array in your JavaScript code as needed.

  return (
    <nav className=" absolute left-0 top-0 right-0 w-screen px-8 py-4 flex items-center justify-between overflow-hidden">
      <div className="z-[1000] relative">
        <div className={styles.box} onClick={handleMenu}>
          <div
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-[40px] cursor-pointer top-0 ${
              menuState ? styles.active : styles["not-active"]
            }`}
          >
            <span
              className={`${
                styles["menu-burguer"]
              } block w-full rounded h-[1px] transition-all duration-300 relative ${
                isMenuLight
                  ? "bg-[#FEFAF7] shadow-[0_2px_10px_0_#FEFAF7]"
                  : "bg-[#58423A] shadow-[0_2px_10px_0_#58423A]"
              }`}
            ></span>
            <span
              className={`${
                styles["menu-burguer"]
              } block w-full rounded h-[1px] transition-all duration-300 relative ${
                isMenuLight
                  ? "bg-[#FEFAF7] shadow-[0_2px_10px_0_#FEFAF7]"
                  : "bg-[#58423A] shadow-[0_2px_10px_0_#58423A]"
              }`}
            ></span>
            <span
              className={`${
                styles["menu-burguer"]
              } block w-full rounded h-[1px] transition-all duration-300 relative ${
                isMenuLight
                  ? "bg-[#FEFAF7] shadow-[0_2px_10px_0_#FEFAF7]"
                  : "bg-[#58423A] shadow-[0_2px_10px_0_#58423A]"
              }`}
            ></span>
          </div>
        </div>
        <Link
          to={"/auth"}
          className={`text-[#58423A] text-lg z-10 absolute right-20 top-[-16px] w-14 ${
            isMenuLight ? "text-[#FEFAF7]" : "text-[#58423A]"
          } ${showSignIn ? "" : "hidden"}`}
        >
          {firstname.length < 2 ? "ورود" : "ثبت نام"}
        </Link>
        <Link
          to={"/store/cart"}
          className={`text-[#58423A] text-lg z-10 absolute right-32 top-[-12px] ${
            showSignIn ? "" : "hidden"
          }`}
        >
          {firstname.length < 2 && <BasketSVG />}
        </Link>
      </div>
      <div
        className={`z-[1000] flex justify-center items-center transition-all duration-500 ease-in-out`}
      >
        <Link to={"/home"} onClick={handleMenu}>
          <img
            src={homeIcon}
            alt="home"
            className="w-15 h-15 rounded-full p-1 bg-transparent transition-all duration-700"
          />
        </Link>
      </div>
      <div
        className={`h-screen w-0 fixed z-50 top-0 right-0 overflow-hidden pt-20 pb-52 pr-0 flex flex-col justify-evenly transition-all duration-1000 ease-in-out bg-[rgba(254,250,247,0.5)] 
        ${
          menuState
            ? "w-[275px] transition-all duration-500 ease-in-out pr-12 border border-[#EDEEE8] backdrop-blur-[10px]"
            : "w-0 transition-all duration-500 ease-in-out"
        }`}
      >
        {linkObjects.map((link) => (
          <NavbarLinks
            to={link.to}
            value={link.value}
            handleMenu={handleMenu}
            menuState={menuState}
          />
        ))}
      </div>
    </nav>
  );
}
