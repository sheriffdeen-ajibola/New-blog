import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutCard = () => {
  return (
    <div className="h-[150px] flex gap-4 mb-[40px]">
      <div className="h-full w-[150px] bg-[#D9D9D9]"></div>
      <div className="w-[250px]">
        <h3 class="text-[20px] font-semibold cursor-pointer dark:text-white w-5/6 mt-4 mb-3">
          Maria Jenin
        </h3>
        <p className="text-[12px] text-gray-400 mb-4 cursor-pointer">
          20 posts
        </p>
        <p className="text-[13px] text-primary-500 mb-3 cursor-pointer">
          see details about author &rarr;
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
