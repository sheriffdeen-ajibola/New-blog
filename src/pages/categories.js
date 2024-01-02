import CategoryCard from "@/components/CategoryCard";
import React from "react";
import { ImAirplane } from "react-icons/im";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { PiDressFill } from "react-icons/pi";
import { BsFillCameraFill } from "react-icons/bs";
import { IoFastFood } from "react-icons/io5";
import { TbRibbonHealth } from "react-icons/tb";
import Link from "next/link";

const categories = () => {
  const Categories = [
    {
      id: 1,
      name: "Environment & Nature",
      image: "FaCanadianMapleLeaf",
    },
    {
      id: 2,
      name: "Technology",
      image: "GrTechnology",
    },
    {
      id: 3,
      name: "Lifestyle & Fashion",
      image: "PiDressFill",
    },
    {
      id: 4,
      name: "Photography",
      image: "BsFillCameraFill",
    },
    {
      id: 5,
      name: "Food",
      image: "IoFastFood",
    },
    {
      id: 6,
      name: "Holiday & Travel",
      image: "ImAirplane",
    },
    {
      id: 7,
      name: "Healthcare",
      image: "TbRibbonHealth",
    },
  ];
  return (
    <div className="bg-primary-100 border w-screen mb-20 pb-12">
      <p className="mb-10 text-[27px] font-semibold text-center mt-10">
        Categories
      </p>
      <div className="max-w-[1200px] p-4  mx-auto my-0 border flex flex-wrap gap-8 justify-center w-[95vw]">
        <Link href="/details">
          <div className="p-8 w-[260px] h-[150px] rounded-[8px] text-center font-medium bg-primary-200">
            <FaCanadianMapleLeaf className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
            <p>Environment & Nature</p>
          </div>
        </Link>
        <Link href="/details">
          <div className="p-8 w-[260px] h-[150px] rounded-[8px] text-center font-medium bg-primary-200">
            <GrTechnology className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
            <p>Technology</p>
          </div>
        </Link>
        <Link href="/details">
          <div className="p-8 w-[260px] h-[150px] rounded-[8px] text-center font-medium bg-primary-200">
            <PiDressFill className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
            <p>Lifestyle & Fashion</p>
          </div>
        </Link>
        <Link href="/details">
          <div className="p-8 w-[260px] h-[150px] rounded-[8px] text-center font-medium bg-primary-200">
            <BsFillCameraFill className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
            <p>Photography</p>
          </div>
        </Link>
        <Link href="/details">
          <div className="p-8 w-[260px] h-[150px] rounded-[8px] text-center font-medium bg-primary-200">
            <IoFastFood className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
            <p>Food</p>
          </div>
        </Link>
        <Link href="/details">
          <div className="p-8 w-[260px] h-[150px] rounded-[8px] text-center font-medium bg-primary-200">
            <ImAirplane className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
            <p>Holiday & Travel</p>
          </div>
        </Link>
        <Link href="/details">
          <div className="p-8 w-[260px] h-[150px] rounded-[8px] text-center font-medium bg-primary-200">
            <TbRibbonHealth className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
            <p>Healthcare</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default categories;
