import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaPenToSquare } from "react-icons/fa6";
import TitleHighlight from "../components/TitleHighlight";

const Nav = () => {
  return (
    <header className="px-40 py-5 bg-primary-200">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-8 font-medium text-sm ">
          <li className="cursor-pointer text-[#333333]">Hompage</li>
          <li className="cursor-pointer text-[#333333]">About</li>
          <li className="cursor-pointer text-[#333333]">Categories</li>
          <li className="cursor-pointer text-[#333333]">Pages</li>
        </ul>

        <p className="font-semibold cursor-pointer">
          <TitleHighlight label="Note" />
          <span className="text-gray-700">Book</span>
          <span className="text-3xl text-primary-500">.</span>
        </p>

        <ul className="flex gap-8 items-center font-medium text-sm">
          <li className="cursor-pointer ttext-[#333333]">
            <CiSearch size={25} />
          </li>
          <li className="cursor-pointer text-[#333333]0">
            <FaPenToSquare />
          </li>
          <li className="cursor-pointer text-[#333333]">Contact</li>
          <li className="cursor-pointer text-[#333333]">En</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
