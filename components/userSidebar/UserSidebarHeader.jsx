import React from "react";
import { HiOutlineLocationMarker, HiOutlineBell,HiOutlineChevronDown } from "react-icons/hi";

export default function UserSidebarHeader() {
  return (
    <div>
      <div className="flex items-center px-4 py-5 justify-between ">
        <div className="text-white  flex   items-center">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="rounded-full"
            width={40}
            height={50}
          />
          <div className="pl-3 flex items-center">
            <p>Ashkan Zafarnejad</p>{" "}
            <HiOutlineChevronDown className="ml-4 text-xl" />
          </div>
        </div>
        <div className="text-white text-2xl flex ">
          <HiOutlineLocationMarker className="mr-5" />
          <HiOutlineBell />
        </div>
      </div>
    </div>
  );
}
