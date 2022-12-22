import React from 'react'

type Props ={
    width: number
    height: number
}

const EllipseBanner = () => {
// const EllipseBanner = ({width, height} : Props) => {
  return (
    <svg
      style={{ width: "inherit", height: "inherit" }}
      // width={width}
      // height={height}
      viewBox="0 0 219 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1641 160.343C-35.4255 103.73 62.0502 51.8685 91.2244 22.6943C120.399 -6.47994 167.699 -6.47998 196.874 22.6943C226.048 51.8685 226.048 99.1693 196.874 128.344C167.699 157.518 68.784 206.795 14.1641 160.343Z"
        fill="#5FD788"
      />
    </svg>
  );
}

export default EllipseBanner