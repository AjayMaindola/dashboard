import React from 'react'
import { Link } from "react-router-dom";
import { Checkbox, Table } from "flowbite-react";
import { CgTrash } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import bird from "./assets/images/mensimg.png";
import banner from "./assets/images/banner.webp";
export default function StoryView() {
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
                to={"/story-view"}
                className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
              >
                Story

              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              /
              <Link
                to={"/story-view"}
                className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
              >
               Story View
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
        <div className="max-w-1320px mx-auto py-[20px] px-[40px] pb-[290px]  ">
              <div className=" middle  rounded-t-xl border pb-[30px]">
                <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl border ">
                Our Story's
                </h1>
                <div>
                  <div className="overflow-x-auto  ">
                    <Table hoverable>
                      <Table.Head>
                        <Table.HeadCell className="p-[0px] gap-4"></Table.HeadCell>
                        <Table.HeadCell>Delete</Table.HeadCell>
                        <Table.HeadCell>S. No.</Table.HeadCell>
                        <Table.HeadCell>Category Name</Table.HeadCell>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Baner</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                      </Table.Head>
      
                      <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell className="p-[0px] gap-4"></Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <Checkbox />
                          </Table.Cell>
                          <Table.Cell>1</Table.Cell>
                          <Table.Cell>#Men's</Table.Cell>
                          <Table.Cell>
                              <img className="w-[50px] border  " src={bird} alt="" />
                          </Table.Cell>
                          <Table.Cell>
                              <img className="w-[100px] border  " src={banner} alt="" />
                          </Table.Cell>
                          <Table.Cell>Discription</Table.Cell>
                          <Table.Cell>
                            <div className="flex items-center gap-1">
                              <CgTrash className="text-[20px] text-red-600" />|
                              <FaEdit className="text-[20px] text-yellow-300" />
                            </div>
                          </Table.Cell>
                          <Table.Cell>
                            <a
                              href="#"
                              className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                              Active
                            </a>
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    
                    
                    </Table>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
