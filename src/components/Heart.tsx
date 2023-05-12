import React from "react";

const Heart: React.FC = () => {
  return (
    <div className="animate-scaleHeart sm:m-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="h-[40px] w-[60px] sm:h-[80px] sm:w-[100px] md:h-[100px] md:w-[120px]"
        viewBox="20 -10 315 342"
      >
        <defs>
          <g id="heart">
            <path
              fill="#ff0038"
              pathLength="1"
              d="M0 200 v-200 h200 
          a100,100 90 0,1 0,200
          a100,100 90 0,1 -200,0
          z"
            />
          </g>
        </defs>
        <desc>a nearly perfect heart made of two arcs and a right angle</desc>
        <use
          xlinkHref="#heart"
          className="stroke-none stroke-0"
          fill="none"
          transform="rotate(225,150,121)"
        />
      </svg>
    </div>
  );
};

export default Heart;
