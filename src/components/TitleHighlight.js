import React from "react";

const TitleHighlight = ({ label }) => {
  return (
    <span className="text-2xl bg-primary-500 font-normal text-white pl-1">
      {label}
    </span>
  );
};

export default TitleHighlight;
