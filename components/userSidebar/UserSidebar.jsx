import React from "react";
// import child components
import PopullarActor from "./PopullarActor";
import UserPopullarMove from "./UserPopullarMove";
import UserSidebarHeader from "./UserSidebarHeader";

export default function UserSidebar() {
  return (
    <div className="bg-gray-800 px-4">
        <UserSidebarHeader />
        <UserPopullarMove />
        <PopullarActor />
    </div>
  );
}
