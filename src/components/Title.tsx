import React from "react";
import Heart from "./Heart";

const Title: React.FC = () => {
  return (
    <div className="flex flex-row items-center p-8 text-center">
      <Heart />
      <p className="grow text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
        Happy Mother's Day
      </p>
      <Heart />
    </div>
  );
};

export default Title;
