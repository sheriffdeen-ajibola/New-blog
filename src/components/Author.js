import React from "react";
import Image from "next/image";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Author = ({ name }) => {
  const authors = [
    {
      name: "Jenny Kia",
      Professions: "",
    },
  ];
  return (
    <div className="flex gap-5   items-center">
      <div className="bg-gray-300 p-0 w-16 h-16  rounded-full"></div>
      <div className="flex-1 pb-2">
        <h3 class="text-sm font-semibold cursor-pointer w-5/6 ">{name}</h3>
        <p className="text-sm text-gray-400 mb-3">
          Fashion Designer, Blogger, Activist.
        </p>
        <div className="flex justify-between w-20 gap-3 ">
          <div className="p-1 rounded-md  bg-transparent border hover:bg-primary-500 hover:text-white">
            <CgFacebook />
          </div>
          <div className="p-1 rounded-md bg-transparent border hover:bg-primary-500 hover:text-white">
            <FaTwitter />
          </div>
          <div className="p-1 rounded-md bg-transparent border hover:bg-primary-500 hover:text-white">
            <AiFillInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
