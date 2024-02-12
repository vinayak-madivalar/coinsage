import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import wallet from "../assets/crypto-wallet.png";
import crate from "../assets/crate.png";

const Footer = () => {
  return (
    <div className="mt-32 mb-0 flex gap-4 items-center">
      <div className="w-1/3">
        <img src={wallet} width={600} />
      </div>
      <div className="w-1/3">
        <div className="flex gap-12 justify-center items-center">
          <BsDiscord size={40} />
          <BsYoutube size={40} />
          <FaInstagramSquare size={35} />
          <FaTwitter size={35} />
        </div>
        <div className="flex justify-center gap-8 text-xl my-6 font-rubik font-medium">
          <p className="hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text">
            Privacy
          </p>
          <p className="hover:bg-gradient-to-r from-red-500 to-purple-500 hover:text-transparent hover:bg-clip-text">
            Terms of use
          </p>
        </div>
      </div>
      <div className="w-1/3">
        <img src={crate} width={350} />
      </div>
    </div>
  );
};

export default Footer;
