import React from "react";

import { BsTwitter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { FaNewspaper } from "react-icons/fa";
import { PiNewspaperThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { BiBell } from "react-icons/bi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="container">
      <div className="upper">
        <BsTwitter className="icon"/>
        <AiOutlineSearch className="icon"/>
      </div>
      <div className="middle">
      <GoHome className="icon"/>
       <FaNewspaper className="icon"/>
       <PiNewspaperThin className="icon"/>
       <CiUser className="icon"/>
      </div>
      {/* <div className="bottom">
        <BiBell className="icon"/>
        <RiLogoutBoxRLine className="icon"/>
      </div> */}
      <div className="bottom">
      <div className="icon-container">
        <BiBell className="icon" />
        <div className="notification-dot" />
      </div>
      <RiLogoutBoxRLine className="icon" />
    </div>
    </div>
  );
};

export default Navbar;
