import React from "react";
import { Link } from "react-router-dom";
import { Checkbox, Table } from "flowbite-react";
import { CgTrash } from "react-icons/cg";
import { FaEdit } from "react-icons/fa";
import banner from "./assets/images/banner.webp";
export default function Order() {
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
                to={"/order-view"}
                className="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2"
              >
                Orders
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
      <div className="max-w-1320px mx-auto py-[20px] px-[40px] pb-[330px]  ">
        <div className=" middle  rounded-t-xl border pb-[30px]">
          <h1 className="text-[18px] font-bold  py-[10px] px-[20px] bg-[#f1f5f9]  rounded-t-xl border ">
          Order's List
          </h1>
          <div>
            <div className="overflow-x-auto  ">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="p-[0px] gap-3"></Table.HeadCell>
                  <Table.HeadCell>Select</Table.HeadCell>
                  <Table.HeadCell>S. No.</Table.HeadCell>
                  <Table.HeadCell>Order Id</Table.HeadCell>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Quantity</Table.HeadCell>
                  <Table.HeadCell>Price</Table.HeadCell>
                  <Table.HeadCell>Date</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell>View</Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="p-[0px] gap-4"></Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>1</Table.Cell>
                    <Table.Cell>Frank01</Table.Cell>
                    <Table.Cell>
                     <h1>Ajay Maindola</h1>
                    </Table.Cell>
                    <Table.Cell>
                    <h1>2</h1>
                    </Table.Cell>
                    <Table.Cell> ₹ 3000/</Table.Cell>
                    <Table.Cell>
                      <div className="flex items-center gap-1">
                        <h1>15/01/2025</h1>
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                     <h1>Process...</h1>
                    </Table.Cell>
                    <Table.Cell>
                    <button className="px-4 py-1 border rounded-xl">View</button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
