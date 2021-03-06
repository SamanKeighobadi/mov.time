import React from "react";
// react icons
import {
  HiOutlineLocationMarker,
  HiOutlineBell,
  HiOutlineChevronDown,
} from "react-icons/hi";

export default function UserSidebarHeader() {
  //static items
  const data = [
    { id: 1, text: "Hollywood" },
    { id: 2, text: "Desney" },
    { id: 3, text: "Pixar" },
    { id: 4, text: "Viu" },
    { id: 5, text: "Universal Studio" },
    { id: 6, text: "Netflix" },
    { id: 7, text: "Bollywood" },
  ];

  return (
    <div>
      <div className="flex items-center  py-5 justify-between ">
        <div className="text-gray-400  flex   items-center">
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            className="rounded-full"
            width={40}
            height={50}
          />
          <div className="pl-3 flex items-center">
            <p>Ashkan Zafarnejad</p>{" "}
            <HiOutlineChevronDown className="ml-4 text-xl" />
          </div>
        </div>
        <div className="text-gray-400 text-2xl flex ">
          <HiOutlineLocationMarker className="mr-5" />
          <HiOutlineBell />
        </div>
      </div>
      <div className="">
        <input
          placeholder="Search"
          className="rounded-lg p-2 w-full bg-gray-700 shadow-lg mt-3"
        />
      </div>
    </div>
  );
}
