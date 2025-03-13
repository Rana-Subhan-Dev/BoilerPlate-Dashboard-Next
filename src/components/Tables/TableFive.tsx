"use client";
import React, { useState } from "react";
import Image from "next/image";

const brandData: any = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Vivik",
    email: "vivkor@gmail.com",
    spentPayment: "$5,768",
    status: "Active",
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "CharlisWilliams",
    email: "charlisW@gmail.com",
    spentPayment: "$4,635",
    status: "Inactive",
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Mark",
    email: "mark@gmail.com",
    spentPayment: "$4,290",
    status: "Active",
  },
  {
    logo: "/images/brand/brand-04.svg",
    name: "spy",
    email: "spy@gmail.com",
    spentPayment: "$3,580",
    status: "Inactive",
  },
  {
    logo: "/images/brand/brand-05.svg",
    name: "John doe",
    email: "jhondoe@gmail.com",
    spentPayment: "$2,740",
    status: "Active",
  },
];
const itemsPerPage=10
const TableFive = () => {
  const [data, setData] = useState(brandData);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(brandData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = brandData.slice(startIndex, startIndex + itemsPerPage);
  const toggleStatus = (index: number) => {
    const updatedData = [...data];
    updatedData[index].status =
      updatedData[index].status === "Active" ? "Inactive" : "Active";
    setData(updatedData);
  };

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex flex-col">
        <div className="grid grid-cols-5 sm:grid-cols-6">
          <div className="px-2 pb-3.5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Profile
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Spent Payment
            </h5>
          </div>
          <div className="px-2 pb-3.5 text-center">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
          <div className="hidden px-2 pb-3.5 text-center sm:block">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {data.map((brand: any, index: number) => (
          <div
            className={`grid grid-cols-5 sm:grid-cols-6 ${
              index === data.length - 1
                ? ""
                : "border-b border-stroke dark:border-dark-3"
            }`}
            key={index}
          >
            <div className="flex items-center gap-3.5 px-2 py-4">
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_mAcrV3vVhLq6HK4c1liqGV59qhOwXdEGw&s' alt="user" width={48} height={48} />
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {brand.name}
              </p>
            </div>

            <div className="flex items-center justify-center px-2 py-4">
              <p className="font-medium text-dark dark:text-white">
                {brand.email}
              </p>
            </div>

            <div className="hidden items-center justify-center px-2 py-4 sm:flex">
              <p className="font-medium text-green-light-1">
                {brand.spentPayment}
              </p>
            </div>

            {/* Status Column */}
            <div className="flex items-center justify-center px-2 py-4">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  brand.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {brand.status}
              </span>
            </div>

            {/* Action Column */}
            <td
              className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === brandData.length - 1 ? "border-b-0" : "border-b"}`}
            >
              <div className="flex items-center justify-end space-x-3.5">
                <button
                  onClick={() => toggleStatus(index)}
                  className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 dark:bg-dark-3"
                >
                  {brand.status === "Active" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-green-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 16.17l-4.24-4.24a1 1 0 10-1.42 1.42l5 5a1 1 0 001.42 0l10-10a1 1 0 00-1.42-1.42L9 16.17z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-600"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.22 6.22a1 1 0 011.42 0L12 10.59l4.36-4.37a1 1 0 011.42 1.42L13.41 12l4.37 4.36a1 1 0 01-1.42 1.42L12 13.41l-4.36 4.37a1 1 0 01-1.42-1.42L10.59 12 6.22 7.64a1 1 0 010-1.42z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>

                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99935 6.87492C8.27346 6.87492 6.87435 8.27403 6.87435 9.99992C6.87435 11.7258 8.27346 13.1249 9.99935 13.1249C11.7252 13.1249 13.1243 11.7258 13.1243 9.99992C13.1243 8.27403 11.7252 6.87492 9.99935 6.87492ZM8.12435 9.99992C8.12435 8.96438 8.96382 8.12492 9.99935 8.12492C11.0349 8.12492 11.8743 8.96438 11.8743 9.99992C11.8743 11.0355 11.0349 11.8749 9.99935 11.8749C8.96382 11.8749 8.12435 11.0355 8.12435 9.99992Z"
                      fill=""
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99935 2.70825C6.23757 2.70825 3.70376 4.96175 2.23315 6.8723L2.20663 6.90675C1.87405 7.3387 1.56773 7.73652 1.35992 8.20692C1.13739 8.71064 1.04102 9.25966 1.04102 9.99992C1.04102 10.7402 1.13739 11.2892 1.35992 11.7929C1.56773 12.2633 1.87405 12.6611 2.20664 13.0931L2.23316 13.1275C3.70376 15.0381 6.23757 17.2916 9.99935 17.2916C13.7611 17.2916 16.2949 15.0381 17.7655 13.1275L17.792 13.0931C18.1246 12.6612 18.431 12.2633 18.6388 11.7929C18.8613 11.2892 18.9577 10.7402 18.9577 9.99992C18.9577 9.25966 18.8613 8.71064 18.6388 8.20692C18.431 7.73651 18.1246 7.33868 17.792 6.90673L17.7655 6.8723C16.2949 4.96175 13.7611 2.70825 9.99935 2.70825ZM3.2237 7.63475C4.58155 5.87068 6.79132 3.95825 9.99935 3.95825C13.2074 3.95825 15.4172 5.87068 16.775 7.63475C17.1405 8.10958 17.3546 8.3933 17.4954 8.71204C17.627 9.00993 17.7077 9.37403 17.7077 9.99992C17.7077 10.6258 17.627 10.9899 17.4954 11.2878C17.3546 11.6065 17.1405 11.8903 16.775 12.3651C15.4172 14.1292 13.2074 16.0416 9.99935 16.0416C6.79132 16.0416 4.58155 14.1292 3.2237 12.3651C2.85821 11.8903 2.64413 11.6065 2.50332 11.2878C2.37171 10.9899 2.29102 10.6258 2.29102 9.99992C2.29102 9.37403 2.37171 9.00993 2.50332 8.71204C2.64413 8.3933 2.85821 8.10958 3.2237 7.63475Z"
                      fill=""
                    />
                  </svg>
                </button>
                <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.59048 1.87502H11.4084C11.5887 1.8749 11.7458 1.8748 11.8941 1.89849C12.4802 1.99208 12.9874 2.35762 13.2615 2.88403C13.3309 3.01727 13.3805 3.16634 13.4374 3.33745L13.5304 3.61654C13.5461 3.66378 13.5506 3.67715 13.5545 3.68768C13.7004 4.09111 14.0787 4.36383 14.5076 4.3747C14.5189 4.37498 14.5327 4.37503 14.5828 4.37503H17.0828C17.4279 4.37503 17.7078 4.65485 17.7078 5.00003C17.7078 5.34521 17.4279 5.62503 17.0828 5.62503H2.91602C2.57084 5.62503 2.29102 5.34521 2.29102 5.00003C2.29102 4.65485 2.57084 4.37503 2.91602 4.37503H5.41609C5.46612 4.37503 5.47993 4.37498 5.49121 4.3747C5.92009 4.36383 6.29844 4.09113 6.44437 3.6877C6.44821 3.67709 6.45262 3.66401 6.46844 3.61654L6.56145 3.33747C6.61836 3.16637 6.66795 3.01728 6.73734 2.88403C7.01146 2.35762 7.51862 1.99208 8.1047 1.89849C8.25305 1.8748 8.41016 1.8749 8.59048 1.87502ZM7.50614 4.37503C7.54907 4.29085 7.5871 4.20337 7.61983 4.1129C7.62977 4.08543 7.63951 4.05619 7.65203 4.01861L7.7352 3.7691C7.81118 3.54118 7.82867 3.49469 7.84602 3.46137C7.9374 3.2859 8.10645 3.16405 8.30181 3.13285C8.33892 3.12693 8.38854 3.12503 8.6288 3.12503H11.37C11.6103 3.12503 11.6599 3.12693 11.697 3.13285C11.8924 3.16405 12.0614 3.2859 12.1528 3.46137C12.1702 3.49469 12.1877 3.54117 12.2636 3.7691L12.3468 4.01846L12.379 4.11292C12.4117 4.20338 12.4498 4.29085 12.4927 4.37503H7.50614Z"
                      fill=""
                    />
                    <path
                      d="M4.92859 7.04179C4.90563 6.69738 4.60781 6.43679 4.2634 6.45975C3.91899 6.48271 3.6584 6.78053 3.68136 7.12494L4.06757 12.9181C4.13881 13.987 4.19636 14.8505 4.33134 15.528C4.47167 16.2324 4.71036 16.8208 5.20335 17.2821C5.69635 17.7433 6.2993 17.9423 7.01151 18.0355C7.69653 18.1251 8.56189 18.125 9.63318 18.125H10.3656C11.4369 18.125 12.3023 18.1251 12.9873 18.0355C13.6995 17.9423 14.3025 17.7433 14.7955 17.2821C15.2885 16.8208 15.5272 16.2324 15.6675 15.528C15.8025 14.8505 15.86 13.987 15.9313 12.9181L16.3175 7.12494C16.3404 6.78053 16.0798 6.48271 15.7354 6.45975C15.391 6.43679 15.0932 6.69738 15.0702 7.04179L14.687 12.7911C14.6121 13.9143 14.5587 14.6958 14.4416 15.2838C14.328 15.8542 14.1693 16.1561 13.9415 16.3692C13.7137 16.5824 13.4019 16.7206 12.8252 16.796C12.2307 16.8738 11.4474 16.875 10.3217 16.875H9.67718C8.55148 16.875 7.76814 16.8738 7.17364 16.796C6.59697 16.7206 6.28518 16.5824 6.05733 16.3692C5.82949 16.1561 5.67088 15.8542 5.55725 15.2838C5.44011 14.6958 5.38675 13.9143 5.31187 12.7911L4.92859 7.04179Z"
                      fill=""
                    />
                    <path
                      d="M7.8539 8.5448C8.19737 8.51045 8.50364 8.76104 8.53799 9.10451L8.95466 13.2712C8.989 13.6146 8.73841 13.9209 8.39495 13.9553C8.05148 13.9896 7.74521 13.739 7.71086 13.3956L7.29419 9.22889C7.25985 8.88542 7.51044 8.57915 7.8539 8.5448Z"
                      fill=""
                    />
                    <path
                      d="M12.1449 8.5448C12.4884 8.57915 12.739 8.88542 12.7047 9.22889L12.288 13.3956C12.2536 13.739 11.9474 13.9896 11.6039 13.9553C11.2604 13.9209 11.0098 13.6146 11.0442 13.2712L11.4609 9.10451C11.4952 8.76104 11.8015 8.51045 12.1449 8.5448Z"
                      fill=""
                    />
                  </svg>
                </button>
                {/* <button className="hover:text-primary">
                  <svg
                    className="fill-current"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.7574 3.24264C17.0814 2.91863 17.545 2.74999 18 2.74999C18.455 2.74999 18.9186 2.91863 19.2426 3.24264L20.7574 4.75736C21.0814 5.08137 21.25 5.54501 21.25 6C21.25 6.45499 21.0814 6.91863 20.7574 7.24264L8.62132 19.3787C8.49759 19.5024 8.35255 19.5992 8.19408 19.6632L3.55962 21.5596C3.39087 21.6251 3.20894 21.6406 3.0339 21.6048C2.85886 21.569 2.69776 21.4835 2.56832 21.3582C2.43888 21.2328 2.34596 21.0729 2.30081 20.8981C2.25566 20.7234 2.2609 20.5412 2.3161 20.3696L4.21142 15.7351C4.27547 15.5771 4.37219 15.4324 4.49607 15.3086L16.7574 3.24264ZM18 4.91421L6.08579 16.8284L4.5359 20.4641L8.17157 18.9142L20.0858 7L18 4.91421ZM13.5 6.5L17.5 10.5"
                      fill="currentColor"
                    />
                  </svg>
                </button> */}
              </div>
            </td>
          </div>
        ))}
      </div>
         {/* Pagination */}
         <div className="mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="mx-1 rounded-md bg-blue-500 px-3 py-1 text-sm font-medium text-white disabled:bg-gray-400"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`mx-1 rounded-md px-3 py-1 text-sm font-medium ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="mx-1 rounded-md bg-blue-500 px-3 py-1 text-sm font-medium text-white disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableFive;
