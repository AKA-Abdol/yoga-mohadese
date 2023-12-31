import React, { useState } from "react";
import styles from "./NavMenu.module.css";
import NavbarLinks from "src/components/ui/NavbarLinks";
interface INavMenu {
  isMenuLight?: boolean;
}

const NavMenu: React.FC<INavMenu> = ({ isMenuLight = false }) => {
  const linkObjects = [
    { value: "خانه", to: "/home" },
    { value: "ورود", to: "/auth" },
    { value: "یوگا با محدثه", to: "/about" },
    { value: "فروشگاه", to: "/store/shop" },
    { value: "سبد خرید", to: "/store/cart" },
    { value: "ثبت درخواست", to: "/ticket" },
    { value: "قوانین", to: "/terms" },
    { value: "ارتباط با ما", to: "/contact" },
    { value: "سوالات متداول", to: "/faq" },
  ];
  const [menuState, setMenuState] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  function handleMenu() {
    setMenuState(!menuState);
    setShowSignIn(!showSignIn);
  }

  return (
    <div>
      <div className={``} onClick={handleMenu}>
        <div
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-[32px] cursor-pointer top-0 z-50 ${
            menuState ? styles.active : styles["not-active"]
          }`}
        >
          <span
            className={`${
              styles["menu-burguer"]
            } block w-full rounded h-[3px] transition-all duration-300 relative ${
              isMenuLight
                ? "bg-[#FEFAF7] shadow-[0_0px_0px_0_#FEFAF7]"
                : "bg-[#58423A] shadow-[0_0px_0px_0_#58423A]"
            }`}
          ></span>
          <span
            className={`${
              styles["menu-burguer"]
            } block w-full rounded h-[3px] transition-all duration-300 relative ${
              isMenuLight
                ? "bg-[#FEFAF7] shadow-[0_0px_0px_0_#FEFAF7]"
                : "bg-[#58423A] shadow-[0_0px_0px_0_#58423A]"
            }`}
          ></span>
          <span
            className={`${
              styles["menu-burguer"]
            } block w-full rounded h-[3px] transition-all duration-300 relative ${
              isMenuLight
                ? "bg-[#FEFAF7] shadow-[0_0px_0px_0_#FEFAF7]"
                : "bg-[#58423A] shadow-[0_0px_0px_0_#58423A]"
            }`}
          ></span>
        </div>
      </div>
      <div
        className={`h-screen w-0 fixed z-40 top-0 right-0 overflow-hidden pt-20 pb-52 pr-0 flex flex-col justify-evenly transition-all duration-1000 ease-in-out bg-[rgba(254,250,247,0.5)] 
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
    </div>
  );
};

export default NavMenu;
