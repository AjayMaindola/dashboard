import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { data } from "../MyData/LeftSideBarData";
import { Link } from "react-router-dom";
export default function SiderPnal() {
  let [showMenue, setShowMenu] = useState(-1);

  return (
    <div className="p-[15px] bg-[#f3f4f6] h-full fixed w-[20%]">
      <div className="flex items-center ps-2.5 mb-5 border-b border-slate-400 pb-6">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-6 me-3 sm:h-7"
          alt="Flowbite Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Frank and Oak
        </span>
      </div>
      <div>
        <ol className="px-[12px] pb-[12px]">
          <li className=" pb-[12px] flex items-center gap-3 font-bold text-[15px]">
            <span>
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"></path>
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"></path>
              </svg>
            </span>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li className=" pb-[12px] flex items-center gap-3 font-bold text-[15px]">
            <span>
              <svg
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path>
              </svg>
            </span>
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ol>
        <h5 className=" px-[15px] uppercase text-[13px] text-slate-400">
          <Link to={"/profile"}>ecommerce components</Link>
        </h5>
      </div>
      {/* Sub faq-part */}
      {data.map((item, index) => {
        return (
          <PCat
            pCatData={item}
            mainIndex={index}
            key={index + 1}
            showMenue={showMenue}
            setShowMenu={setShowMenu}
          />
        );
      })}
    </div>
  );
}

function PCat({ pCatData, mainIndex, showMenue, setShowMenu }) {
  let { productTitle, icon, smenu1, smenu2, smenu1Link, smenu2Link } = pCatData;

  return (
    <>
      <div
        onClick={() => setShowMenu(showMenue == mainIndex ? -1 : mainIndex)}
        className=" px-[12px] py-[15px] flex items-center justify-between cursor-pointer"
      >
        <span className="flex item-cente gap-3">
          <img src={icon} className="w-4" alt="" />
          <h3 className="font-bold text-[15px]">{productTitle}</h3>
        </span>
        <MdKeyboardArrowDown
          className={` duration-150 text-[22px] cursor-pointer  ${
            showMenue == mainIndex ? "rotate-[180deg]" : "rotate-[0deg]"
          }   `}
        />
      </div>
      {/* faq open part */}
      {showMenue == mainIndex && smenu2 ? (
        <div className="px-[15px] ">
          <span className="flex items-center gap-3 pb-[10px]">
            <svg
              fill="currentColor"
              className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
            </svg>
            <h3 className="text-[13px] cursor-pointer">
              <Link to={smenu1Link}>{smenu1}</Link>{" "}
            </h3>
          </span>

          <span className="flex items-center gap-3">
            <svg
              fill="currentColor"
              className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
            </svg>

            <h3 className="text-[13px] cursor-pointer">
              <Link to={smenu2Link}>{smenu2}</Link>{" "}
            </h3>
          </span>
        </div>
      ) : showMenue == mainIndex && smenu1 ? (
        <div className="px-[15px] ">
          <span className="flex items-center gap-3 pb-[10px]">
            <svg
              fill="currentColor"
              className="flex-shrink-0 w-3 h-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
            </svg>
            <h3 className="text-[13px] cursor-pointer">{smenu1}</h3>
          </span>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
