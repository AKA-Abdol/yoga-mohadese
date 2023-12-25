import React from "react";
import { Link } from "react-router-dom";

interface INavbarLinks {
  value: string;
  to: string;
  menuState: boolean;
  handleMenu: () => void;
}

const NavbarLinks: React.FC<INavbarLinks> = ({
  menuState,
  handleMenu,
  value,
  to,
}) => {
  return (
    <Link
      to={to}
      className={`no-underline opacity-0  block z-[1000] transition-all duration-500 ease-in-out hover:text-[#D6CCC2]  ${
        menuState ? "opacity-100 text-[#58423A] text-xl" : `text-[0px]`
      }`}
      onClick={handleMenu}
    >
      {value}
    </Link>
  );
};

export default NavbarLinks;
