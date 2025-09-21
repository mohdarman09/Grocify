import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-200 py-15">
      <div className="max-w-[90%] mx-auto px-8 flex flex-wrap gap-y-8">

        <div className="flex-1 basis-[350px]">

          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500">O</span>cify
          </a>

          <p className="text-zinc-600 mt-3 max-w-[340px]">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>

          <p className="text-zinc-800 mt-3">
            &copy; 2025 all right reserved
          </p>

        </div>

        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
            </li>
            <li className="mt-3">
                <NavLink to="/about-us" className="hover:text-orange-500 text-zinc-800">About</NavLink>
            </li>
            <li className="mt-3">
                <a href="#" className="hover:text-orange-500 text-zinc-800">FAQ's</a>
            </li>
        </ul>

        <ul className="flex-1">
            <li>
                <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
            </li>
            <li className="mt-3">
                <NavLink to="/contact-us" className="hover:text-orange-500 text-zinc-800">Support Center</NavLink>
            </li>
            <li className="mt-3">
                <NavLink to="contact-us" className="hover:text-orange-500 text-zinc-800">Feedback</NavLink>
            </li>
            <li className="mt-3">
                <NavLink to="contact-us" className="hover:text-orange-500 text-zinc-800">Contact Us</NavLink>
            </li>
        </ul>

        <div className="flex-1">
            <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>

            <p className="mt-3 text-zinc-600">
                Questions or Feedback? <br />
                We'd love to hear from you.
            </p>
             
             <div className="flex bg-white p-1 rounded-lg mt-3">
                <input type="email" name="email" id="email" autoComplete="off" placeholder="Email Address" className="h-[5vh] px-3 flex-1 focus:outline-none"/>

                <button className="bg-gradient-to-b from-orange-400 to-orange-600 text-white text-bold p-2 rounded-lg text-xl hover:scale-103 hover:to-orange-600 transition-all duration-300 cursor-pointer">
                    <IoIosArrowForward/> 
                </button>
             </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
