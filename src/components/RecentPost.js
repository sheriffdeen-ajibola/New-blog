import React from "react";
import TitleHighlight from "./TitleHighlight";
import RecentCard from "./RecentCard";
import Image from "next/image";
import Author from "./Author";
import name from "./Author";
import Button from "./Button";
import ButtonTwo from "./ButtonTwo";

const RecentPost = () => {
  const RecentPosts = [
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
      image: "/Robot.jpg",

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
    {
      id: 5,
      title: "set video playback speed with javascript",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/Iphone.jpg",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      id: 6,
      title: "set video playback speed with javascript",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/Andre.png",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      id: 7,
      title: "set video playback speed with javascript",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/basketball.jpg",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      id: 8,
      title: "set video playback speed with javascript",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/pexels3.jpg",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
  ];
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1150px] h-full flex mx-auto my-0 gap-20">
        <div className="w-2/3">
          <p className="mb-14">
            <TitleHighlight label="Recent" />
            <span className="text-[20px] ml-1">Posted</span>
          </p>
          <div className=" grid grid-cols-2 gap-8  mb-20">
            {RecentPosts.map((post) => (
              <RecentCard image={post.image} />
            ))}
          </div>
          <div className="text-center ">
            <Button label="&larr; Prev" />
            <ButtonTwo label="1" />
            <ButtonTwo label="2" />
            <ButtonTwo label="3" />
            <Button label="Next &rarr;" />
          </div>
        </div>
        <div className="w-1/3 bg-transparent">
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
          <div className="bg-transparent sticky top-2">
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

export default RecentPost;
