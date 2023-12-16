import React from "react";
import styles from "./index.module.css";
const BgCloudOne = () => {
  return (
    <svg
      className={styles.cloudOne}
      xmlns="http://www.w3.org/2000/svg"
      width="277"
      height="278"
      viewBox="0 0 277 278"
      fill="none"
    >
      <g filter="url(#filter0_f_215_212)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M184.332 194.654C175.988 202.772 163.294 203.044 151.752 204.903C139.353 206.901 126.906 209.92 114.939 205.833C101.165 201.129 87.9869 193.094 80.4926 180.567C72.5049 167.214 66.8116 149.871 73.0517 135.813C79.1789 122.01 99.8509 123.229 110.621 112.693C122.224 101.341 121.982 79.2426 137.071 73.1833C152.587 66.9519 171.948 72.4417 185.46 82.6376C198.414 92.4118 204.25 109.294 206.186 125.336C207.79 138.635 199.124 150.012 195.12 162.712C191.656 173.702 192.561 186.648 184.332 194.654Z"
          fill="#8CA780"
          fill-opacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_215_212"
          x="0.396973"
          y="0.548096"
          width="275.984"
          height="277.315"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="35"
            result="effect1_foregroundBlur_215_212"
          />
        </filter>
      </defs>
    </svg>
  );
};
const BgCloudTwo = () => {
  return (
    <svg
      className={styles.cloudTwo}
      xmlns="http://www.w3.org/2000/svg"
      width="260"
      height="265"
      viewBox="0 0 260 265"
      fill="none"
    >
      <g filter="url(#filter0_f_215_211)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M179.19 87.269C191.382 101.29 190.811 121.777 186.607 140.383C182.636 157.956 173.003 173.838 157.469 183.399C141.172 193.429 121.361 197.93 104.079 191.176C86.7783 184.414 75.3282 168.082 71.6089 149.842C68.1675 132.964 75.5978 116.301 85.8684 101.866C96.209 87.3322 109.621 74.6303 127.063 71.9021C146.218 68.906 166.818 73.0394 179.19 87.269Z"
          fill="#F1DED2"
          fill-opacity="0.8"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_215_211"
          x="0.756836"
          y="0.983643"
          width="258.569"
          height="263.408"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="35"
            result="effect1_foregroundBlur_215_211"
          />
        </filter>
      </defs>
    </svg>
  );
};
export { BgCloudOne, BgCloudTwo };
