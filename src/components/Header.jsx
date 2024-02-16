import logo from "../assets/logo.png";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import HamBurgerMenu from "./HamBurgerMenu";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-8 font-rubik ">
      <div>
        <img src={logo} width={180} />
      </div>
      <div className="">
        <ul className="hidden lg:flex lg:gap-12 lg:text-xl lg:font-semibold">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/market"}>Market</Link>
          </li>
          <li>
            <a href="#chooseus">ChooseUs</a>
          </li>
          <li>
            <a href="#join">Join</a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex lg:gap-8">
        <BsDiscord color={""} size={25} />
        <FaTwitter color={""} size={25} />
      </div>
      <div className="lg:hidden">
        <HamBurgerMenu />
      </div>
    </div>
  );
};

export default Header;
