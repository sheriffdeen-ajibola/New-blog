import TitleHighlight from "@/components/TitleHighlight";
import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <div className="">
      <div className="bg-primary-100 h-[600px] py-12 text-center w-full">
        <p className="mb-1 my-0 mx-auto w-1/3 ">
          <TitleHighlight label="Notebook is A Place" />
          <span className="text-[20px] ml-1 font-medium">
            Where You Can Find <br /> Your Perfect Blogs
          </span>
        </p>
        <p className="w-[665px] text-[15px] my-0 mx-auto mb-2 p-4">
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts for change. Completely streamline functionalized models and
          out-of-the-box functionalities. Authoritatively target proactive
          vortals vis-a-vis exceptional results. Compellingly brand emerging
          sources and compelling materials. Globally iterate parallel content
        </p>
        <p className="text-[17px] font-medium mb-1">
          The best ideas can change who we are.
        </p>
        <p className="w-[665px] text-[15px] my-0 mx-auto mb-16 p-4">
          Dynamically underwhelm integrated outsourcing via timely models.
          Rapidiously reconceptualize visionary imperatives without 24/365
          catalysts for
        </p>
        <p className="mb-1 my-0 mx-auto w-1/3 ">
          <TitleHighlight label="We Are" />
          <span className="text-[20px] ml-1 font-medium">Featured On</span>
        </p>
        <div className="flex flex-wrap gap-24 my-14 mx-auto max-w-[1200px]">
          <span>
            <Image
              className="h-full w-full rounded-md"
              src="/grammarly.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md"
              src="/unsplash.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md"
              src="/wordpress.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md"
              src="/medium.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
          <span>
            <Image
              className="h-full w-full rounded-md"
              src="/blogger.svg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </span>
        </div>
      </div>
      <div className=" py-20">
        <p className="mb-1 my-0 mx-auto w-screen ">
          <TitleHighlight label="Meet" />
          <span className="text-[20px] ml-1 font-medium">Our Authors</span>
        </p>
      </div>
    </div>
  );
};

export default about;
