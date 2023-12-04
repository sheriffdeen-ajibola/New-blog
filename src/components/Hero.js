import React from "react";
import TitleHighlight from "./TitleHighlight";
import FeaturedCard from "./FeaturedCard";
import PopularCard from "./PopularCard";
import RecentCard from "./RecentCard";

const Hero = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "A Diplomat’s Perspective on Artificial Intelligence (AI)",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/pexels1.jpg",
      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      id: 2,
      title: "The Impact of Artificial Intelligence on the Gaming Industry",
      category: "Lifestyle",
      author: "Jessica Koli",
      date: " 02 december 2022",
      image: "/pexels2.jpg",

      duratiion: "3mins",
      Excerpt:
        "Did you come here for something in particular or just general Riker-bashing",
    },
  ];

  const popularPosts = [
    {
      id: "1",
      title: "10 adventures to have in North America",
      category: "Travel",
      author: "Jessica Koli",
      duratiion: "5mins",
      image: "/Adventure.png",
    },
    {
      id: "2",
      title: "The 20 best creative & strong handmade of 2022",
      category: "Lifestyle",
      author: "Adam John",
      duratiion: "2mins",
      image: "/Driving.png",
    },
    {
      id: "3",
      title: "Alessandro Novelli’s animation plays with ANDRE",
      category: "Lifestyle",
      author: "James Roland",
      duratiion: "3mins",
      image: "/Myth.png",
    },
    {
      id: "4",
      title: "Apartamento at ten: A decade of celebrating the everyday",
      category: "Lifestyle",
      author: "Peter Kelvin",
      duratiion: "7mins",
      image: "/Inspiration.png",
    },
  ];

  return (
    <section className="bg-primary-100">
      <div className="h-full grid grid-cols-5 gap-[50px] py-[80px] max-w-[1150px] mx-auto my-0">
        <div className="col-span-3">
          <p className="mb-14">
            <TitleHighlight label="Featured" />
            <span className="text-[20px] ml-1">This month</span>
          </p>
          <div>
            {featuredPosts.map((post) => (
              <FeaturedCard
                image={post.image}
                key={post.id}
                title={post.title}
              />
            ))}
          </div>
        </div>
        <div className="border-l-primary-500 border-l-2 pl-[50px] col-span-2">
          <p className="mb-14">
            <TitleHighlight label="Popular" />
            <span className="text-[20px] ml-1">Posted</span>
          </p>
          <div>
            {popularPosts.map((post) => (
              <PopularCard
                image={post.image}
                key={post.id}
                title={post.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
