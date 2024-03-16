import React from "react";

import './Avatar.scss'; 

export const Avatar = () => {
  return (
    <div className="avatar">
      <svg
        viewBox="0 0 1211 1186"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_497_1386)">
          <path
            d="M921.756 371.875C934.853 548.836 674.789 884.673 508.134 896.289C341.479 907.905 68.0224 671.539 54.9256 494.577C41.8288 317.616 436.524 368.855 650.348 88.9262C789.083 -31.8648 908.659 194.913 921.756 371.875Z"
            fill="url(#paint0_linear_497_1386)"
          />
        </g>
        <g filter="url(#filter1_f_497_1386)">
          <ellipse
            cx="704.316"
            cy="693.631"
            rx="451.699"
            ry="438.369"
            fill="url(#paint1_linear_497_1386)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_497_1386"
            x="0.609375"
            y="0.965576"
            width="975.621"
            height="949.736"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="27"
              result="effect1_foregroundBlur_497_1386"
            />
          </filter>
          <filter
            id="filter1_f_497_1386"
            x="198.617"
            y="201.263"
            width="1011.4"
            height="984.737"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="27"
              result="effect1_foregroundBlur_497_1386"
            />
          </filter>
          <linearGradient
            id="paint0_linear_497_1386"
            x1="60.2548"
            y1="546.233"
            x2="850.677"
            y2="261.709"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A6A5FF" />
            <stop offset="1" stopColor="#9281F8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_497_1386"
            x1="704.316"
            y1="255.263"
            x2="704.316"
            y2="1132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#84AEFF" />
            <stop offset="1" stopColor="#DF6FF1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
