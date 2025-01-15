import React from "react";
import { FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import bird from "../assets/images/bird-colorful-1avif.avif";
import sublogo from "../assets/images/vortex.avif";
import heroimg from "../assets/images/ajayMaindola.jpg"
export default function Profile() {
  return (
    <>
      <nav className="flex border-b-2 mx-[10px] " aria-label="Breadcrumb">
        <ol className="p-3 px-4 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to={"/dashboard"}
              className="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link
                to={"/dashboard"}
                className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
              >
                Profile
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ms-1 text-md font-medium text-gray-500 md:ms-2"></span>
            </div>
          </li>
        </ol>
      </nav>
      {/* Second section div start */}
      <div className="max-w-1320px mx-auto py-[20px] px-[40px]">
        <div className=" middle  rounded-t-xl border ">
          <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl ">
            Profile
          </h1>

          <div className="grid grid-cols-2">
            <div className=" py-[15px] px-[20px]">
              <h1 className="mb-[20px]">Name</h1>
              <input className="w-full rounded-md text-[14px]" type="text" placeholder="Enter Your Name" />
              <h2 className="mt-[35px]">Social Links</h2>
              <div className="flex gap-2 mt-[20px] items-center">
                <GrFacebookOption className="text-[22px]" />
                <input className="w-full rounded-md text-[14px]" type="text"  placeholder="Enter FaceBook Account Link"/>
              </div>
              <div className="flex gap-2 mt-[20px] items-center">
                <IoLogoInstagram className="text-[22px]" />
                <input className="w-full rounded-md text-[14px]" type="text" placeholder="Enter Instagram Account Link" />
              </div>
              <div className="flex gap-2 mt-[20px] items-center">
                <FaYoutube className="text-[252x]" />
                <input className="w-full rounded-md text-[14px]" type="text"  placeholder="Enter youtube Account Link"/>
              </div>
              <div className="flex gap-2 mt-[20px] items-center">
                <RiTwitterXLine className="text-[22px]" />
                <input className="w-full rounded-md text-[14px]" type="text"placeholder="Enter your X Account Link" />
              </div>

              <div>
                <h2 className="mt-[35px]">Logo</h2>
                <img
                  className="w-[90px] border rounded-xl mt-5"
                  src={bird}
                  alt=""
                />
              </div>
              <div>
                <h2 className="mt-[35px]">Sub Logo</h2>
                <img
                  className="w-[90px] border rounded-xl mt-5"
                  src={sublogo}
                  alt=""
                />
              </div>
              <div>
                <h2 className="mt-[35px]">Sub Logo</h2>
                <div className="flex items-center gap-2 mt-[22px] pb-[20px]">
                  <input className="w-full rounded-md" type="text" />
                  <button className="py-[7px] px-[30px] bg-[#7e22ce] text-[white] rounded-md text-[15px]">
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col  justify-star items-center mt-[100px]">
              <img className="rounded-full w-[150px] h-[150px] border-4" src={heroimg} alt="" />
              <h1 className="py-[20px] text-[20px]">Profile Image</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
