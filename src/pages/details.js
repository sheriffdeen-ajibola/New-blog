import React from "react";
import TitleHighlight from "src/components/TitleHighlight";
import RecentCard from "src/components/RecentCard";
import Image from "next/image";
import Author from "src/components/Author";
import name from "src/components/Author";
import Button from "src/components/Button";
import { RiCalendar2Line } from "react-icons/ri";

const details = () => {
  const RelatedPosts = [
    {
      id: 1,
      title: "set video playback speed with javascript",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/pexels4.jpg",
      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      id: 2,
      title: "The 20 best creative & strong handmade of 2022",
      category: "Technology",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/pexels1.jpg",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      id: 3,
      title: "Apartamento at ten: A decade of celebrating the everyday",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/Apartment.png",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      id: 4,
      title: "set video playback speed with javascript",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/PC.png",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
  ];
  return (
    <section className="py-20 md:py-10 bg-white px-8 md:px-4 lg:px-12 ">
      <div className="max-w-[1150px] h-full flex mx-auto my-0 gap-20">
        <div className="w-2/3 lg:w-full">
          <div className="pb-36 border-b border-primary-300 mb-28">
            <span className="bg-[#DFF1F0] py-1 px-3 text-[12px] rounded-sm cursor-pointer ">
              Lifestyle
            </span>
            <h3 class="text-[2rem] md:text-[1.2rem] font-semibold cursor-pointer dark:text-white w-5/6 md:w-full mt-2 mb-4">
              Naming Convention in NextJS: Boosting SEO and Code Maintainability
            </h3>

            <div className="flex items-start gap-1 mb-3">
              <div className="w-5 h-5 bg-slate-400 rounded-full "></div>
              <p className="text-xs flex gap-1 items-center mb-12">
                Jesica Koli | <RiCalendar2Line /> 02 December 2022
              </p>
            </div>
            <div className=" rounded-md bg-slate-400 mb-8">
              <Image
                className="h-1/5 w-full object-cover rounded-md "
                src="/pexels3.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <p className="text-[15px] pr-2">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt on Lieutenant Worf. Could someone
              survive inside a transporter buffer for 75 years? Fate. It
              protects fools, little children, and ships.
            </p>
            <h3 class="text-[1.4rem] font-semibold cursor-pointer dark:text-white w-5/6 mt-2 mb-4">
              Naming Convention in NextJS: Boosting SEO and Code Maintainability
            </h3>
            <p className="text-[15px] pr-2">
              Did you come here for something in particular or just general
              Riker-bashing? And blowing into maximum warp speed, you appeared
              for an instant to be in two places at once. We have a saboteur
              aboard. We know you’re dealing in stolen ore. But I wanna talk
              about the assassination attempt
            </p>
          </div>
          <div className="">
            <p className="mb-8">
              <TitleHighlight label="See Related" />
              <span className="text-[24px] ml-1 ">Posts</span>
            </p>
            <div className=" grid grid-cols-2 md:grid-cols-1 gap-8 md:max-w-[350px]  mb-20">
              {RelatedPosts.map((post) => (
                <RecentCard image={post.image} key={post.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/3 bg-transparent lg:hidden">
          <p className="mb-8">
            <TitleHighlight label="Top" />
            <span className="text-[20px] ml-1">Authors</span>
          </p>
          <div>
            <div className="flex flex-col gap-[30px] mb-14">
              <Author name="Jenny Kia" />
              <Author name="Andress Rasel" />
              <Author name="John Fedrick" />
            </div>
          </div>
          <div className="h-80 bg-primary-500 w-full px-[20px] py-[50px] mb-20 ">
            <div className="w-[80%]">
              <h3 class="text-xl cursor-pointer w-[80%] text-white mb-[10px] ">
                Want To Travel Sikkim By Car
              </h3>
              <p className="text-sm text-white mb-5">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into
              </p>
              <button className="bg-white text-[15px] text-primary-500 px-[20px] py-[6px] rounded-md hover:bg-primary-500 hover:text-white hover:border">
                Visit Us
              </button>
            </div>
          </div>
          <div className="bg-transparent sticky top-5 ">
            <p className="mb-14">
              <TitleHighlight label="Search" />
              <span className="text-[20px] ml-1">With Tags</span>
            </p>
            <Button label="Travel" />
            <Button label="Lifestyle" />
            <Button label="Fashion" />
            <Button label="Technology" />
            <Button label="Business" />
            <Button label="Design" />
            <Button label="Health" />
            <Button label="Food" />
            <Button label="Art" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default details;
