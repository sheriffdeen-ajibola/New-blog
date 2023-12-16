import Image from "next/image";
import React from "react";
import { ImAirplane } from "react-icons/im";

const Category = () => {
  return (
    <div className="p-8 w-[260px] h-[150px] rounded-md border text-center font-medium bg-primary-200">
      <ImAirplane className="w-10 h-10 mx-auto text-primary-500 mb-6 text-[14px]" />

      <p>Holiday & Travel</p>
    </div>
  );
};

export default Category;
