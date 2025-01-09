import React from "react";

export default function MidComponentBox() {
  return (
    <>
      {/* <div>MidComponentBox</div> */}

      <div className="grid grid-cols-3 gap-4 gap-y-8 pt-[20px] px-[35px] pb-[100px] w-[100%] ">
        <div className="bg-[#5856d3] px-[15px] pt-[20px] pb-[70px] w-[100%] rounded-[5px]">
          <span className="flex items-center justify-between">
            <h1 className="text-white text-[22px] font-bold">26K (-12.4% ↓)</h1>
            <svg
              fill="white"
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
            </svg>
          </span>
          <h3 className="text-[20px] text-white">Users</h3>
        </div>
        {/* 2nd */}
        <div className="bg-[#2998fe] px-[15px] pt-[20px] pb-[70px] w-[100%] rounded-[5px]">
          <span className="flex items-center justify-between">
            <h1 className="text-white text-[22px] font-bold">
              $6,200 (40.9% ↑)
            </h1>
            <svg
              fill="white"
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
            </svg>
          </span>
          <h3 className="text-[20px] text-white">Product</h3>
        </div>
        {/* 3rd */}
        <div className="bg-[#fcb01e] px-[15px] pt-[20px] pb-[70px] w-[100%] rounded-[5px]">
          <span className="flex items-center justify-between">
            <h1 className="text-white text-[22px] font-bold">
              2.49% (84.7% ↑)
            </h1>
            <svg
              fill="white"
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
            </svg>
          </span>
          <h3 className="text-[20px] text-white">Category</h3>
        </div>
        {/* 4th */}
        <div className="bg-[#e95253] px-[15px] pt-[20px] pb-[70px] w-[100%] rounded-[5px] mb-[80px]">
          <span className="flex items-center justify-between">
            <h1 className="text-white text-[22px] font-bold">44K (-23.6% ↓)</h1>
            <svg
              fill="white"
              className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 512"
            >
              <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path>
            </svg>
          </span>
          <h3 className="text-[20px] text-white">Orders</h3>
        </div>
      </div>
    </> //main closed
  );
}
