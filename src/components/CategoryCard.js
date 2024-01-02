import Image from "next/image";
import React from "react";
import { TbRibbonHealth } from "react-icons/tb";

const CategoryCard = ({ image, name }) => {
  return (
    <div className="p-8 w-[260px] h-[150px] rounded-md border text-center font-medium bg-primary-200">
      <TbRibbonHealth className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />
      <p>{name}</p>
    </div>
  );
};

export default CategoryCard;
