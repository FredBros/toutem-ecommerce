import React from 'react'
type Props = {
  color?: string,
};

const BlobCategoryDetail = ({
  color = "var(--nextui-colors-primary)"}: Props) => {
  return (
    <svg
      style={{ width: "inherit", height: "inherit" }}
      viewBox="0 0 157 169"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.6581 149.962C21.0471 133.355 -22.0538 52.1851 14.3005 12.8325C37.8539 -12.4833 64.9115 4.1386 74.7388 40.8934C78.6041 50.6525 84.4746 55.2984 92.5334 58.5143C100.592 61.7303 119.053 57.0804 134.752 69.0378C181.994 105.022 152.061 212.156 48.6581 149.962Z"
        fill={color}
      />
    </svg>
  );
};

export default BlobCategoryDetail