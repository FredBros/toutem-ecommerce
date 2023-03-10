import * as React from "react"

type Props = {
  color: string;
};

const Blob = ({color}: Props) => (
  <svg
    style={{ width: "inherit", height: "inherit" }}
    viewBox="0 0 86 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.2124 73.0488C2.04991 55.024 -6.19901 31.5314 5.47636 9.58807C19.4706 -16.7134 24.2625 22.7259 45.752 15.7427C67.2414 8.75945 95.8735 26.1173 81.2288 57.0458C67.5195 85.9987 42.375 91.0736 22.2124 73.0488Z"
      fill={color}
    />
  </svg>
);

export default Blob

//style={{ width: "inherit", height: "inherit" }}