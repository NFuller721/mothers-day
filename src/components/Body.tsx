import Image from "next/image";
import React from "react";

const Body: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="mx-16 my-8 text-center text-4xl">
        You have been a great mom over the past 18 years, and you have always
        done more for us than we have for you. So thank you for everything you
        have done.
      </p>
      <Image
        height={498}
        width={357}
        src="/ted-lasso-thank-you.gif"
        alt="'I appreciate that. Thank you.' - Ted Lasso"
      />
    </div>
  );
};

export default Body;
