import React from "react";
import { RiCalendar2Line } from "react-icons/ri";
import { BsClock } from "react-icons/bs";
import Image from "next/image";

const RecentCard = ({ image }) => {
  return (
    <div className=" gap-4 rounded-md bg-white mb-4 last:mb-0 min-w-[200px]">
      <div className=" h-56 rounded-md bg-slate-400 mb-8">
        <Image
          className="h-full w-full object-cover rounded-md "
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div>
        <span className="bg-[#DFF1F0] py-1 px-3 text-[12px] rounded-sm cursor-pointer ">
          Lifestyle
        </span>

        <h3 class="text-[1.4rem] lg:text-[1.2rem] font-semibold cursor-pointer dark:text-white w-5/6 lg:w-full mt-2 mb-4">
          Set Video Playback Speed With JavaScript
        </h3>

        <div className="flex items-center gap-1 mb-3">
          <div className="w-5 h-5 bg-slate-400 rounded-full inline-block"></div>
          <p className="text-xs lg:text-[12px] flex gap-1 items-center ">
            Jesica Koli | <RiCalendar2Line /> 02 December 2022 | <BsClock /> 3
            Min. To read
          </p>
        </div>
        <p className="text-sm w-5/6 lg:text-[12px] lg:w-full">
          Did you come here for something in particular or just general
          Riker-bashing
        </p>
      </div>
    </div>
  );
};

export default RecentCard;
