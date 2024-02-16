import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const HamBurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <section className=" flex lg:hidden">
        <div className="" onClick={handleToggle}>
          <GiHamburgerMenu size={30} />
        </div>

        <div className={isMenuOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes size={30} />
          </div>
          <ul
            className="flex flex-col items-center justify-between min-h-[250px]"
            onClick={closeMenu}
          >
            <li className="border-b border-gray-400 text-2xl font-rubik font-medium my-8 uppercase">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="border-b border-gray-400 text-2xl font-rubik font-medium my-8 uppercase">
              <Link to={"/market"}>Market</Link>
            </li>
            <li>.</li>
          </ul>
        </div>
      </section>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        overflow: hidden;
      }
    `}</style>
    </div>
  );
};

export default HamBurgerMenu;
