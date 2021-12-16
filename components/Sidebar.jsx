import React from "react";
import {GrHomeRounded} from 'react-icons/gr'
import {BsBookmarkDashFill} from 'react-icons/bs'
import {FaRegClock,FaWallet} from 'react-icons/fa'
import {MdHomeFilled} from 'react-icons/md'
import {IoSettingsOutline,IoIosArrowDropdownCircle} from 'react-icons/io'
import {HiOutlinePlay,HiDocumentText} from 'react-icons/hi'

export default function Sidebar() {
  const menus = [
    { id: 1, text: "Home", icon: <MdHomeFilled className="inline-block  mr-2 hover:text-cyan-500" />},
    { id: 2, text: "Favorite", icon: <BsBookmarkDashFill className='inline-block mr-2 hover:text-cyan-500' />},
    { id: 3, text: "Purchase", icon: <FaWallet className="inline-block mr-2 hover:text-cyan-500" /> },
    { id: 4, text: "Reminder", icon: <FaRegClock className="inline-block mr-2 hover:text-cyan-500" /> },
  ];

  const others = [
    { id: 1, text: "Playlist", icon: <HiDocumentText className="inline-block text-lg mr-2 hover:text-cyan-500" />},
    { id: 2, text: "Live", icon: <HiOutlinePlay className="inline-block text-lg mr-2 hover:text-cyan-500" /> },
    { id: 3, text: "Bookmarks", icon: <IoIosArrowDropdownCircle className="inline-block text-lg mr-2 hover:text-cyan-500" /> },
    { id: 4, text: "Settings", icon: <HiDocumentText className='inline-block text-lg mr-2 hover:text-cyan-500' /> },
  ];

  return (
    <div className="bg-gray-800 w-56 h-screen">
      <div className="pb-6 px-8">
      <h2 className="text-xl text-white font-bold"><span className="text-cyan-600 font-bold">Mov</span>.time</h2>
      </div>
      <div className=" px-8">
        <ul className="flex  justify-center flex-col">
          <span className="text-white uppercase  text-xs">Menu</span>
          {menus.map((item, index) => (
            <li className="py-3 " key={index}>
              <a href="#" className="text-white font-sans font-semibold py-5"> {item.icon}  {item.text}</a>
            </li>
          ))}

          <span className="text-white uppercase  text-xs ">Other</span>
          {others.map((itme, index) => (
            <li key={index} className="py-3">
              <a href="#" className="text-white font-sans font-semibold"> {itme.icon} {itme.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
