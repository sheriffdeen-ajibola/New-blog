import TitleHighlight from "@/components/TitleHighlight";
import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import Button from "@/components/Button";

const contact = () => {
  return (
    <div className=" p-20 pb-42 max-w-[1150px] mx-auto my-0">
      <p className="mb-14 text-center">
        <TitleHighlight label="Contact " />
        <span className="text-[20px] ml-1 font-semibold">Us</span>
      </p>
      <div className="flex  gap-14 ">
        <div className="max-w-[638px]   w-1/2">
          <form className=" grid grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              class="block  w-full text-sm border p-[10px] rounded-sm border-primary-400"
              placeholder="Name"
            />
            <input
              type="text"
              class="block w-full text-sm border p-[10px] rounded-sm border-primary-400"
              placeholder="Email"
            />
            <input
              type="text"
              class="block w-full text-sm border p-[10px] col-span-2 rounded-sm border-primary-400"
              placeholder="Subject"
            />
            <textarea
              id="about"
              name="about"
              rows="6"
              placeholder="Type your message"
              class="block w-full p-[7px] rounded-sm col-span-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </form>
          <button className=" text-[15px]  hover:bg-primary-400 hover:border-primary-500 px-[20px] py-[8px] rounded-md border mr-[12px] mb-[12px] bg-primary-500 text-white">
            Send message
          </button>
        </div>
        <div className="w-1/2">
          <p className="mb-6 w-5/6">
            Dynamically underwhelm integrated outsourcing via timely models.
            Rapidiously reconceptualize visionary imperatives without
          </p>
          <p className="mb-6">
            blog.notebook@gmail.com
            <br className="mb-3" />
            +886554 654654
            <br className="mb-3" />
            9567 Turner Trace Apt. BC C3G844
          </p>
          <p className="font-semibold mb-3">Follow On:</p>
          <div className="flex justify-between w-20 gap-3 ">
            <div className="p-1 rounded-md  bg-transparent border hover:bg-primary-500 hover:text-white">
              <FaTwitter />
            </div>
            <div className="p-1 rounded-md bg-transparent border hover:bg-primary-500 hover:text-white">
              <CgFacebook />
            </div>
            <div className="p-1 rounded-md bg-transparent border hover:bg-primary-500 hover:text-white">
              <FaPinterest />
            </div>
            <div className="p-1 rounded-md bg-transparent border hover:bg-primary-500 hover:text-white">
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
