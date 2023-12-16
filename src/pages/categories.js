import Category from "@/components/Category";
import React from "react";

const categories = () => {
  return (
    <div className="bg-primary-100 border w-screen mb-20 pb-12">
      <p className="mb-10 text-[27px] font-semibold text-center mt-10">
        Categories
      </p>
      <div className="max-w-[1200px] p-4  mx-auto my-0 border flex flex-wrap gap-8 justify-center w-[95vw]">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default categories;
