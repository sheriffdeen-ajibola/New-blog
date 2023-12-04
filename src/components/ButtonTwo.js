import React from "react";

const ButtonTwo = ({ label }) => {
  return (
    <button className=" text-[15px] text-gray-400 px-[15px] py-[8px] rounded-md border mr-[12px] mb-[12px] hover:bg-primary-500 hover:text-white">
      {label}
    </button>
  );
};

export default ButtonTwo;
