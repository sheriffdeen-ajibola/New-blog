import TitleHighlight from "@/components/TitleHighlight";
import React from "react";
import Image from "next/image";
import AboutCard from "@/components/AboutCard";
import Button from "@/components/Button";
import { FaRegPenToSquare } from "react-icons/fa6";

const about = () => {
  return (
    <div className="">
      <div className="bg-primary-100  pt-12 pb-20 text-center w-full lg:px-6">
        <p className="mb-1 my-0 mx-auto w-1/3 lg:w-full">
          <TitleHighlight label="Notebook is A Place" />
          <span className="text-[20px] md:text-[15px] ml-1 font-medium">
            Where You Can Find <br /> Your Perfect Blogs
          </span>
        </p>
        <p className="max-w-[665px] text-[15px] md:text-[13px] my-0 mx-auto mb-2 p-4">
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts for change. Completely streamline functionalized models and
          out-of-the-box functionalities. Authoritatively target proactive
          vortals vis-a-vis exceptional results. Compellingly brand emerging
          sources and compelling materials. Globally iterate parallel content
        </p>
        <p className="text-[17px] md:text-[15px] font-medium mb-1">
          The best ideas can change who we are.
        </p>
        <p className="max-w-[665px] text-[15px] md:text-[13px] my-0 mx-auto mb-16 p-4">
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts for
        </p>
        <p className="mb-1 my-0 mx-auto w-1/3 lg:w-full">
          <TitleHighlight label="We Are" />
          <span className="text-[20px] md:text-[15px] ml-1 font-medium">
            Featured On
          </span>
        </p>
        <div className="flex flex-wrap gap-24 md:gap-12 my-14 mx-auto max-w-[1200px] ">
          <span>
            <Image
              className="h-full w-full  md:w-[100px] rounded-md"
              src="/grammarly.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md md:w-[100px]"
              src="/unsplash.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md md:w-[100px]"
              src="/wordpress.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md md:w-[100px]"
              src="/medium.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md md:w-[100px]"
              src="/blogger.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
        </div>
      </div>
      <div className=" py-20 md:px-8 sm:px-4 mx-auto">
        <p className="mb-10 my-0 mx-auto text-center md:text-[15px]">
          <TitleHighlight label="Meet" />
          <span className="text-[20px] ml-1 font-medium">Our Authors</span>
        </p>
        <div className="max-w-[864px] grid grid-cols-2 md:grid-cols-1 my-0 mx-auto ">
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </div>
      </div>
      <div className="max-w-[1076px] w-full my-0 mx-auto text-current bg-primary-100 py-[56px] px-[180px] lg:p-[80px] md:p-[50px] lg: text-center mb-[100px]">
        <p className="mb-5 my-0 mx-auto text-center text-[1.4rem] md:text-[1.2rem] font-semibold">
          Want To Write On Notebook?
        </p>
        <p className="mb-5 md:">
          there have some simple steps, by following these steps you can be a
          regular author in notebook
        </p>
        <button className="py-[10px] px-[24px] text-[14px] border-primary-500 text-primary-500 rounded-md border-2 hover:bg-primary-500 hover:text-white">
          Write On Notebook
        </button>
      </div>
    </div>
  );
};

export default about;
