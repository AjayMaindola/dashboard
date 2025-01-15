import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, Radio } from "flowbite-react";

export default function StoryDetails() {
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
                      to={"/story-details"}
                      className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
                    >
                      Our Story's
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    /
                    <Link
                      to={"/story-details"}
                      className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
                    >
                      Our Story's Details
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
                    Our Story's
                    </h1>
                    <form className=" py-[10px] px-[20px]">
                      <h1 className="pb-[20px] font-semibold ">Story Name</h1>
                      <input
                        className="w-full rounded-md text-[14px]"
                        type="text"
                        placeholder="Story Name"
                      />
                      <h1 className="pb-[20px] mt-4 font-semibold">Image</h1>
                      <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

                      <h1 className="pb-[20px] mt-4 font-semibold">Banner Image</h1>
                      <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

                      <h1 className="pb-[20px] mt-4 font-semibold"> Description</h1>
                      <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add Product Discriptio..."></textarea>
          
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
                      <Button className="bg-violet-700">Add Story</Button>
                    </form>
                  </div>
                </div>
    </>
  )
}
