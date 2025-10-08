import React from "react";
import { NavLink } from "react-router-dom"; 

const Navbar = () => {
  const activeClass =
    "bg-clip-text text-transparent bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] font-bold";
  

  const defaultClass = "text-[#001931]";

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? activeClass : defaultClass;
  };

  return (
    <div className="w-[1240px] mx-auto navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <NavLink to="/" className="bg-clip-text text-transparent font-bold bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
          HERO.IO
        </NavLink>
      </div>
      <div className="navbar-center lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={getNavLinkClass} 
              end 
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className={getNavLinkClass}> 
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className={getNavLinkClass}> 
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white">
          Download
        </a>
      </div>
    </div>
  );
};

export default Navbar;