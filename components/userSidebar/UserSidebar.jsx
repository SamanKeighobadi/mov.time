import React from "react";
import PopullarActor from "./PopullarActor";
import UserSidebarHeader from "./UserSidebarHeader";

export default function UserSidebar() {
  return (
    <div className="bg-gray-800 px-4">
        <UserSidebarHeader />
        <PopullarActor />
    </div>
  );
}
