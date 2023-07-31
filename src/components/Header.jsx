import { useContext, useState } from "react";

// images
import Logo from "../img/logo-removebg-preview.png";

// icons
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

// link
import { Link } from "react-router-dom";

// componnents
import SearchForm from "./SearchForm";
import CategoryNavMobile from "./CategoryNavMobile";
import Cart from "./Cart";

//  cart context
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { toggleNav, isOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  // console.log(useContext(CartContext));

  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Alternatively, to refresh the page, you can use the following line
    // window.location.reload();
  };

  return (
    <header className="bg-white/40 backdrop-blur-3xl py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 items-center justify-between mb-4 xl:mb-0">
          {/* menu */}
          <div
            className="text-3xl xl:hidden cursor-pointer"
            onClick={() => setCatNavMobile(true)}
          >
            <FiMenu />
          </div>
          {/* category nav for mobile only */}
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 h-screen w-full cart`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo  */}
          <Link to="/" onClick={handleClick}>
            <img src={Logo} alt="Logo" className="w-[150px]" />
          </Link>
          {/* serarchform for desktop only */}
          <div className="hidden w-full xl:flex xl:max-w-[734px] ">
            <SearchForm />
          </div>
          <div className="flex items-center gap-x-[10px]">
            {/* contact and cart */}
            <div className="hidden xl:flex uppercase">
              Contact &nbsp;us + 234 567 890
            </div>
            {/* cart icon */}
            <div onClick={toggleNav} className="relative cursor-pointer">
              <SlBag size={24} />
              {/* cart count */}
              <div className="bg-accent p-2 text-white absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
          </div>
          {/* cart */}

          <div
            className={`${
              isOpen ? "right-0" : "-right-full"
            } bg-white shadow-xl fixed top-0 bottom-0 h-screen w-full z-10 md:max-w-[500px] cart`}
          >
            <Cart />
          </div>
        </div>
        {/* search form for mobile only*/}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
