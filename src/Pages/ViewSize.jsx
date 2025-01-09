import { Checkbox, Table } from 'flowbite-react'
import React from 'react'
import { CgTrash } from 'react-icons/cg'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function ViewSize() {
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
              to={"/size-view"}
              className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
            >
              Size
            </Link>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            /
            <Link
              to={"/size-view"}
              className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
            >
              View Size 
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
    <div className="max-w-1320px mx-auto py-[20px] px-[40px] pb-[240px]">
      <div className=" middle  rounded-t-xl border pb-[30px]">
        <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl border ">
          View Color
        </h1>
        <div>
          <div className="overflow-x-auto  ">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="p-[0px] gap-4"></Table.HeadCell>
                <Table.HeadCell>Delete</Table.HeadCell>
                <Table.HeadCell>Color Name</Table.HeadCell>
                <Table.HeadCell>Color Code</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
              </Table.Head>

              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-[0px] gap-4"></Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>White</Table.Cell>
                  <Table.Cell>#fff</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                    <CgTrash className="text-[20px] text-red-600"/>|
                    <FaEdit className="text-[20px] text-yellow-300"/>
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

              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-[0px] gap-4"></Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>Red</Table.Cell>
                  <Table.Cell>#f05f</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                    <CgTrash className="text-[20px] text-red-600"/>|
                    <FaEdit className="text-[20px] text-yellow-300"/>
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

              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-[0px] gap-4"></Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>Black</Table.Cell>
                  <Table.Cell>#000</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-1">
                    <CgTrash className="text-[20px] text-red-600"/>|
                    <FaEdit className="text-[20px] text-yellow-300"/>
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

        <div className="grid grid-cols-2"></div>
      </div>
    </div>
  </>
  )
}
