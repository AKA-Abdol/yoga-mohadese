import { useContext, useEffect, useState } from "react";
import homeIcon from "../assets/images/icon.png";
import homeIconLight from "../assets/images/icon-light.png";
import BasketSVG from "src/assets/svgs/BasketSVG";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "./layout/BodyLayout";
import NavMenu from "./ui/NavMenu/NavMenu";

export default function Header() {
  const location = useLocation();
  const [isMenuLight, setIsMenuLight] = useState<boolean>(false);
  const { firstname } = useContext(MyContext);

  useEffect(() => {
    if (location.pathname === "/contact" || location.pathname === "/home")
      setIsMenuLight(true);
  }, []);

  return (
    <nav className="absolute top-0 right-0 w-screen px-8 py-4 flex items-center justify-between overflow-hidden">
      <NavMenu isMenuLight={isMenuLight} />
      <Link
        to={"/auth"}
        className={`text-[#58423A] text-lg z-10 absolute right-24 w-14 ${
          isMenuLight ? "text-[#FEFAF7]" : "text-[#58423A]"
        }`}
      >
        {firstname.length > 2 ? `${firstname}` : "ورود"}
      </Link>
      <Link
        to={"/store/cart"}
        className={`text-[#58423A] text-lg z-10 absolute right-40`}
      >
        {firstname.length > 2 && <BasketSVG isMenuLight={isMenuLight} />}
      </Link>
      <div
        className={`z-10 flex justify-center items-center transition-all duration-500 ease-in-out`}
      >
        <Link to={"/home"}>
          <img
            src={isMenuLight ? homeIconLight : homeIcon}
            alt="home"
            className="w-15 h-15 rounded-full p-1 bg-transparent transition-all duration-700"
          />
        </Link>
      </div>
    </nav>
  );
}
