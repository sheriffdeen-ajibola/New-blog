import React from "react";
import TitleHighlight from "./TitleHighlight";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-[100px] pb-6 bg-primary-100 px-40 lg:px-12 md:px-4">
      <div className="grid grid-cols-12 md:grid-cols-1 border-b border-[#D1E7E5;] gap-[6em] xl:gap-[30px]  mx-auto my-0 pb-16 ">
        <div className="col-span-3 xl:col-span-5 lg:col-span-6 ">
          <p className="mb-8">
            <TitleHighlight label="Note" />
            <span className="text-[16px] ml-1 font-semibold ">Book</span>
            <span className="text-3xl text-primary-500">.</span>
          </p>
          <p className="w-5/7 md:text-[13px]">
            Did you come here for something in particular or just general Riker
          </p>
        </div>
        <div className="col-span-2 xl:col-span-3 lg:col-span-6 md:text-[15px]">
          <h3 class="text-md font-semibold cursor-pointer w-5/6 mb-3">Blogs</h3>
          <ul className="md:text-[13px]">
            <li className="leading-7">Travel</li>
            <li className="leading-7">Technology</li>
            <li className="leading-7">Lifestyle</li>
            <li className="leading-7">Fashion</li>
            <li className="leading-7">Business</li>
          </ul>
        </div>
        <div className=" col-span-2 xl:col-span-4 lg:col-span-6 md:text-[15px]">
          <h3 class="text-md font-semibold cursor-pointer w-5/6 mb-3">
            Quick Links
          </h3>
          <ul className="md:text-[13px]">
            <li className="leading-7">FAQ</li>
            <li className="leading-7">Terms & Conditions</li>
            <li className="leading-7">Support</li>
            <li className="leading-7">Privacy Policy</li>
          </ul>
        </div>
        <div className="col-span-5 xl:col-span-6 md:text-[15px]">
          <h3 class="text-md font-semibold cursor-pointer w-5/6 mb-5">
            Subscribe For Newsletter
          </h3>
          <form className="w-full max-w-[400px] mb-10">
            <div className="w-full bg-primary-500 rounded-md overflow-hidden">
              <input className="px-[22px] py-[12px] w-3/5 bg-primary-300 " />
              <button className="text-center  px-12 text-white w-2/5 ">
                <p className="mx-auto w-[80%]">Subscribe</p>
              </button>
            </div>
          </form>
          <h3 class="text-md font-semibold cursor-pointer w-5/6 mb-5">
            Follow On:
          </h3>
          <div className="flex justify-between w-20 gap-3 ">
            <div className="p-1 rounded-md cursor-pointer bg-transparent border hover:bg-primary-500 hover:text-white">
              <FaTwitter />
            </div>
            <div className="p-1 rounded-md cursor-pointer bg-transparent border hover:bg-primary-500 hover:text-white">
              <CgFacebook />
            </div>
            <div className="p-1 rounded-md cursor-pointer bg-transparent border hover:bg-primary-500 hover:text-white">
              <FaPinterest />
            </div>
            <div className="p-1 rounded-md cursor-pointer bg-transparent border hover:bg-primary-500 hover:text-white">
              <AiFillInstagram />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-sm text-center text-[#555555]">
        Designed By Themefisher & Developed By Gethugothemes. Built by Sheriff
        Ajibola
      </p>
    </footer>
  );
};

export default Footer;
