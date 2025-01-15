import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, Radio } from "flowbite-react";


export default function AddColor() {
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
                Colors
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link
                to={"/dashboard"}
                className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
              >
                View Colors
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
            <div className="max-w-1320px mx-auto py-[8px] px-[40px] mb-[0px]">
              <div className=" middle  rounded-t-xl border pb-[30px] ">
                <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl ">
                  Add Category
                </h1>
                <form className=" py-[10px] px-[20px]">
                  <h1 className="pb-[20px] font-semibold ">Color Nmae </h1>
                  <input
                    className="w-full rounded-md text-[14px]"
                    type="text"
                    placeholder="Color Name"
                  />
                  <div className='mt-5 p-[100px]'>
                  <input type="color" />
                  </div>
                 
                 
                  <div className="flex items-center gap-10 mt-2">
                    <h1 className="py-[15px]">Status :</h1>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2">
                        <Radio id="germany" name="countries" value="Germany" />
                        <Label htmlFor="germany">Active</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="germany" name="countries" value="Germany" />
                        <Label htmlFor="germany">Deactive</Label>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-violet-700">Add Color</Button>
                </form>
              </div>
            </div>
    </>
  )
}
