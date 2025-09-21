import React, { useState, useRef, useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TbMenu3, TbMenu2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import Search from "../Search/Search";

const Navbar = ({ searchItem, setSearchItem }) => {
  const [showMenu, setshowMenu] = useState(false);
  const menuRef = useRef();

  const togggleMenu = () => {
    setshowMenu(!showMenu);
  };

  // Outside click handler
  useEffect(() => {
    if (!showMenu) return;
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setshowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <header className="bg-white fixed top-0 right-0 left-0 z-50 shadow-sm">
      <nav className="flex justify-between max-w-[90%] px-8 mx-auto md:h-15 h-12 items-center">
        {/* Nav Logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500">O</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-10 hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold tracking-wide"
                  : "text-zinc-800 font-semibold tracking-wide"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold tracking-wide"
                  : "text-zinc-800 font-semibold tracking-wide"
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/our-products"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold tracking-wide"
                  : "text-zinc-800 font-semibold tracking-wide"
              }
            >
              Our Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold tracking-wide"
                  : "text-zinc-800 font-semibold tracking-wide"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Nav Action  */}
        <div className="flex items-center gap-x-5">
          <NavLink
            to="/add-to-cart"
            className={({ isActive }) =>
              isActive ? "text-orange-500 text-3xl" : "text-zinc-800 text-3xl"
            }
          >
            <FaCartPlus />
          </NavLink>
          {/* Hamburger */}
          <a
            onClick={togggleMenu}
            href="#"
            className="text-zinc-800 text-3xl md:hidden"
          >
            {showMenu ? <TbMenu3 className="text-orange-500" /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={menuRef}
          className={`flex flex-col w-80 gap-y-10 p-10 bg-orange-500/20 backdrop-blur-xl items-center gap-x-10 md:hidden absolute top-12 -left-full transform -translate-x-1/2 rounded-xl  transition-all duration-500 shadow-xl ${
            showMenu ? "left-1/2" : ""
          }`}
        >
          <li>
            <NavLink
              to="/"
              onClick={() => setshowMenu(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold tracking-wide"
                  : "text-zinc-8 font-semibold tracking-wide"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              onClick={() => setshowMenu(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold tracking-wide"
                  : "text-zinc-8 font-semibold tracking-wide"
              }
            >
              About Us
            </NavLink>
          </li>
            <li>
              <NavLink
                to="/our-products"
                onClick={() => setshowMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold tracking-wide"
                    : "text-zinc-8 font-semibold tracking-wide"
                }
              >
                Our Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                onClick={() => setshowMenu(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold tracking-wide"
                    : "text-zinc-8 font-semibold tracking-wide"
                }
              >
                Contact Us
              </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
