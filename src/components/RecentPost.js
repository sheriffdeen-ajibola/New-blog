import React from "react";
import TitleHighlight from "./TitleHighlight";
import RecentCard from "./RecentCard";
import Image from "next/image";
import Author from "./Author";
import name from "./Author";
import Button from "./Button";

const RecentPost = () => {
  const RecentPosts = [
    {
      id: 1,
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
      id: 2,
      title: "The 20 best creative & strong handmade of 2022",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/Creative.png",

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
      image: "/PC.png",

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
      image: "/Apartment.png",

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
      image: "/PC.png",

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
          <div className=" grid grid-cols-2 gap-8 ">
            {RecentPosts.map((post) => (
              <RecentCard image={post.image} />
            ))}
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
          <div className="h-80 bg-primary-500 w-full px-[20px] py-[50px] mb-20">
            <div className="w-[80%]">
              <h3 class="text-2xl cursor-pointer text-white mb-[10px] ">
                Want To Travel Sikkim By Car
              </h3>
              <p className="text-sm text-white mb-3">
                Did you come here for something in particular or just general
                Riker-bashing? And blowing into
              </p>
              <button className="bg-white text-md text-primary-500 px-6 py-2 rounded-md hover:bg-primary-500 hover:text-white hover:border">
                Visit Us
              </button>
            </div>
          </div>
          <div className="bg-transparent">
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
