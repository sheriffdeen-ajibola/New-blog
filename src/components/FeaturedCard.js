import React from "react";
import Image from "next/image";
import { RiCalendar2Line } from "react-icons/ri";
import { BsClock } from "react-icons/bs";

const FeaturedCard = ({ image, title }) => {
  return (
    <div className="p-4 grid grid-cols-7 gap-4 rounded-md bg-white mb-4 last:mb-0">
      <div className="col-span-3 h-56 rounded-md bg-slate-400 ">
        <Image
          className="h-full w-full object-cover rounded-md"
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="col-span-4">
        <span className="bg-[#DFF1F0] py-1 px-3 text-[12px] rounded-sm cursor-pointer ">
          Lifestyle
        </span>

        <h3 class="text-[1.4rem] font-semibold cursor-pointer dark:text-white w-5/6 mt-2 mb-4">
          {title}
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="w-5 h-5 bg-slate-400 rounded-full inline-block"></div>
          <p className="text-xs flex gap-1 items-center text-xs ">
            Jesica Koli | <RiCalendar2Line /> 02 December 2022 | <BsClock /> 3
            Min. To read
          </p>
        </div>
        <p className="text-sm w-5/6">
          Did you come here for something in particular or just general
          Riker-bashing
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;