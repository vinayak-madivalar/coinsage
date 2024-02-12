import logo from "../assets/logo.png";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-8 font-rubik ">
      <div>
        <img src={logo} width={180} />
      </div>
      <div className="">
        <ul className="flex gap-12 text-xl font-semibold ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Market</li>
          <li>ChooseUs</li>
          <li>Join</li>
        </ul>
      </div>
      <div className="flex gap-8">
        <BsDiscord color={""} size={25} />
        <FaTwitter color={""} size={25} />
      </div>
    </div>
  );
};

export default Header;
