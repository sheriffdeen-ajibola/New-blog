import React from "react";

const TitleHighlight = ({ label }) => {
  return (
    <span className="text-2xl lg:text-[20px] bg-primary-500 font-normal text-white pl-1">
      {label}
    </span>
  );
};

export default TitleHighlight;
