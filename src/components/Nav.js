import React from "react";
import { ImSearch } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPenToSquare } from "react-icons/fa6";
import TitleHighlight from "../components/TitleHighlight";

const Nav = () => {
  return (
    <header className="px-40 xl:px-14 py-5 lg:py-4 bg-primary-200 ">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-8 font-medium text-sm lg:hidden ">
          <li className="cursor-pointer text-[#333333]">Hompage</li>
          <li className="cursor-pointer text-[#333333]">About</li>
          <li className="cursor-pointer text-[#333333]">Categories</li>
          <li className="cursor-pointer text-[#333333]">Pages</li>
        </ul>

        <p className="font-semibold cursor-pointer text-center">
          <TitleHighlight label="Note" />
          <span className="text-gray-700">Book</span>
          <span className="text-3xl text-primary-500">.</span>
        </p>

        <ul className="flex gap-8 items-center font-medium text-sm">
          <li className="cursor-pointer lg:w-2 text-[#333333]">
            <ImSearch size={16} className="lg:w-5  text-primary-500" />
          </li>
          <li className="cursor-pointer lg:w-5 text-primary-500 ">
            <FaPenToSquare size={16} />
          </li>
          <li className="cursor-pointer sm:hidden text-[#333333]">Contact</li>
          <li className="cursor-pointer sm:hidden text-[#333333]">En</li>
          <li className="cursor-pointer lg:block hidden text-primary-500 w-2">
            <RxHamburgerMenu size={23} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
