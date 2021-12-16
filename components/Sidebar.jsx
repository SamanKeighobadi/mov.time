import React from "react";
import {GrHomeRounded} from 'react-icons/gr'
import {BsBookmarkDashFill} from 'react-icons/bs'
import {FaRegClock,FaWallet} from 'react-icons/fa'
import {MdHomeFilled} from 'react-icons/md'

export default function Sidebar() {
  const menus = [
    { id: 1, text: "Home", icon: <MdHomeFilled className="inline-block " />},
    { id: 2, text: "Favorite", icon: <BsBookmarkDashFill className='inline-block' />},
    { id: 3, text: "Purchase", icon: <FaWallet className="inline-block" /> },
    { id: 4, text: "Reminder", icon: <FaRegClock className="inline-block" /> },
  ];

  const others = [
    { id: 1, text: "Playlist", icon: "" },
    { id: 2, text: "Live", icon: "" },
    { id: 3, text: "Bookmarks", icon: "" },
    { id: 4, text: "Settings", icon: "" },
  ];

  return (
    <div className="bg-gray-800 w-48 h-screen">
      <h2 className="text-xl text-cyan-700">Mov.time</h2>
      <div className="">
        <ul>
          <span className="">Menu</span>
          {menus.map((item, index) => (
            <li className="" key={index}>
              <a href="#" className="text-white font-sans"> {item.icon}  {item.text}</a>
            </li>
          ))}

          <span>Other</span>
          {others.map((itme, index) => (
            <li key={index}>
              <a href="#" className="text-white font-sans">{itme.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
