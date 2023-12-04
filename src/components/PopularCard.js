import React from "react";
import Image from "next/image";
import { BsClock } from "react-icons/bs";

const PopularCard = ({ image, title }) => {
  return (
    <div className="flex bg-transparent gap-5 w-auto mb-8">
      <div className="w-1/3 h-22 rounded-md bg-slate-400">
        <Image
          className="h-full w-full rounded-md"
          src={image}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>

      <div className="flex-1">
        <span className="bg-[#DFF1F0] py-1 px-3 text-[10px] rounded-sm cursor-pointer">
          Lifestyle
        </span>

        <h3 class="text-sm leading-1 font-semibold cursor-pointer dark:text-white w-5/6 mt-1 mb-2 pr-0">
          {title}
        </h3>

        <div className="flex items-center gap-1 ">
          <div className="w-4 h-4 bg-slate-400 rounded-full inline-block"></div>
          <p className="text-[10px] flex gap-1 items-center ">
            Jesica Koli | <BsClock /> 3 Min. To read
          </p>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
