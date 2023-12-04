import React from "react";

const Button = ({ label }) => {
  return (
    <button className=" text-[16px] text-gray-400 px-[20px] py-2 rounded-md border mr-[12px] mb-[12px] hover:bg-primary-500 hover:text-white">
      {label}
    </button>
  );
};

export default Button;
