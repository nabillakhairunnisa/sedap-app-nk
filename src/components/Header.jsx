import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const location = useLocation();

  return (
    <div
      id="header-container"
      className="flex justify-between items-center px-6 py-4 shadow-sm"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Logo />
      </div>

      {/* Navigation Menu */}
      <nav className="flex space-x-6 text-sm font-medium text-gray-800">
        <a
          href="/"
          className={`text-[#232F4B] text-[30px] px-[10px] py-[30px] font-bebasnue hover:text-green-500 ${
            location.pathname === "/" ? "text-green-500" : ""
          }`}
        >
          HOME
        </a>
        <a
          href="/about"
          className={`text-[#232F4B] text-[30px] px-[10px] py-[30px] font-bebasnue hover:text-green-500 ${
            location.pathname === "/about" ? "text-green-500" : ""
          }`}
        >
          ABOUT
        </a>
        <a
          href="/Produk"
          className={`text-[#232F4B] text-[30px] px-[10px] py-[30px] font-bebasnue hover:text-green-500 ${
            location.pathname === "/Produk" ? "text-green-500" : ""
          }`}
        >
          SHOP
        </a>
        <a
          href="/Contact"
          className={`text-[#232F4B] text-[30px] px-[10px] py-[30px] font-bebasnue hover:text-green-500 ${
            location.pathname === "/Contact" ? "text-green-500" : ""
          }`}
        >
          CONTACT
        </a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <div id="search-bar" className="relative w-full max-w-lg">
          <input
            id="search-input"
            type="text"
            placeholder="Search Here..."
            className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
          />
          <FaSearch
            id="search-icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
          />
        </div>

        {/* Cart Icon */}
        <div className="relative p-3 bg-white rounded-full shadow cursor-pointer">
          <FaShoppingCart className="text-gray-700" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
            2
          </span>
        </div>

        {/* Auth Menu */}
        <nav className="flex space-x-0.5 text-sm font-medium text-gray-800">
          <a
            href="/Login"
            className={`text-[#232F4B] text-[20px] px-[10px] py-[30px] font-bebasnue hover:text-green-500 ${
              location.pathname === "/Login" ? "text-green-500" : ""
            }`}
          >
            Login
          </a>
          <a
            href="/Register"
            className={`text-[#232F4B] text-[20px] px-[10px] py-[30px] font-bebasnue hover:text-green-500 ${
              location.pathname === "/Register" ? "text-green-500" : ""
            }`}
          >
            Register
          </a>
        </nav>
      </div>
    </div>
  );
}
