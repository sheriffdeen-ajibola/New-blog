import React from "react";
import Image from "next/image";
import { RiCalendar2Line } from "react-icons/ri";
import { BsClock } from "react-icons/bs";

const FeaturedCard = ({ image, title }) => {
  return (
    <div className="p-4 grid grid-cols-7 gap-4 lg:gap-6 rounded-md bg-white mb-4 sm:mb-8  sm:max-w-[350px] sm:mx-auto sm:pb-10">
      <div className="col-span-3 sm:col-span-7 h-56 rounded-md bg-slate-400 ">
        <Image
          className="h-full w-full object-cover rounded-md"
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="col-span-4 sm:col-span-7">
        <span className="bg-[#DFF1F0] py-1 px-3 text-[12px] rounded-sm cursor-pointer ">
          Lifestyle
        </span>

        <h3 class="text-[1.4rem] sm:text-[1rem] font-semibold cursor-pointer dark:text-white lg:w-full mt-2 mb-4">
          {title}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="w-5 h-5 bg-slate-400 rounded-full inline-block"></div>
          <p className="text-xs sm:text-[11px] flex gap-1 items-center text-xs ">
            Jesica Koli | <RiCalendar2Line /> 02 December 2022 | <BsClock /> 3
            Min. To read
          </p>
        </div>
        <p className="text-sm sm:text-[11px] w-5/6">
          Did you come here for something in particular or just general
          Riker-bashing
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
