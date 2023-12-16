import { useEffect, useState } from "react";
import homeIcon from "../assets/images/icon.png";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [isMenuLight, setIsMenuLight] = useState<boolean>(false);
  const [menuState, setMenuState] = useState(false);
  const [showVorood, setShowVorood] = useState(true);

  useEffect(() => {
    if (location.pathname === "/contact") setIsMenuLight(true);
  }, []);

  function handleMenu() {
    setMenuState(!menuState);
    setShowVorood(!showVorood);
  }

  return (
    <div className=" absolute top-0 right-0 w-[100vw] px-8 py-4 flex items-center justify-between overflow-hidden">
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
          className={`text-[#58423A] text-lg z-10 absolute right-[110px] top-[-20px] ${
            isMenuLight ? "text-[#FEFAF7]" : "text-[#58423A]"
          } ${showVorood ? "" : "hidden"}`}
        >
          ورود
        </Link>
      </div>
      <div
        className={`z-100 flex justify-center items-center transition-all duration-500 ease-in-out`}
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
        className={`h-screen w-0 fixed z-50 top-0 right-0 overflow-hidden pt-20 pb-52 pr-0 text-center flex flex-col justify-evenly transition-all duration-1000 ease-in-out bg-[rgba(254,250,247,0.5)] 
        ${
          menuState
            ? "w-[275px] transition-all duration-500 ease-in-out pr-5 border border-[#EDEEE8] backdrop-blur-[10px]"
            : "w-0 transition-all duration-500 ease-in-out"
        }`}
      >
        <Link
          to={"/home"}
          className={`no-underline opacity-0 text-2xl block z-[1000] transition-all duration-1000 ease-in-out hover:text-[#D6CCC2]  ${
            menuState ? "opacity-100 text-[#58423A]" : ``
          }`}
          onClick={handleMenu}
        >
          خانه
        </Link>
        <Link
          to={"/auth"}
          className={`no-underline opacity-0 text-2xl block z-[1000] transition-all duration-1000 ease-in-out hover:text-[#D6CCC2]  ${
            menuState ? "opacity-100 text-[#58423A]" : ``
          }`}
          onClick={handleMenu}
        >
          ثبت نام / ورود
        </Link>
        <Link
          to={"/about"}
          className={`no-underline opacity-0 text-2xl block z-[1000] transition-all duration-1000 ease-in-out hover:text-[#D6CCC2]  ${
            menuState ? "opacity-100 text-[#58423A]" : ``
          }`}
          onClick={handleMenu}
        >
          یوگا با محدثه
        </Link>
        <Link
          to={"/store"}
          className={`no-underline opacity-0 text-2xl block z-[1000] transition-all duration-1000 ease-in-out hover:text-[#D6CCC2]  ${
            menuState ? "opacity-100 text-[#58423A]" : ``
          }`}
          onClick={handleMenu}
        >
          فروشگاه
        </Link>
        <Link
          to={"/ticket"}
          className={`no-underline opacity-0 text-2xl block z-[1000] transition-all duration-1000 ease-in-out hover:text-[#D6CCC2]  ${
            menuState ? "opacity-100 text-[#58423A]" : ``
          }`}
          onClick={handleMenu}
        >
          ثبت درخواست
        </Link>
        <Link
          to={"/terms"}
          className={`no-underline opacity-0 text-2xl block z-[1000] transition-all duration-1000 ease-in-out hover:text-[#D6CCC2]  ${
            menuState ? "opacity-100 text-[#58423A]" : ``
          }`}
          onClick={handleMenu}
        >
          قوانین
        </Link>
        <Link
          to={"/contact"}
          className={`no-underline opacity-0 text-2xl block z-[1000] transition-all duration-1000 ease-in-out hover:text-[#D6CCC2]  ${
            menuState ? "opacity-100 text-[#58423A]" : ``
          }`}
          onClick={handleMenu}
        >
          ارتباط با ما
        </Link>
      </div>
    </div>
  );
}
