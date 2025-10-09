import React from "react";
import { NavLink } from "react-router-dom"; 
import logo from '../../assets/logo.png'
import { Github } from 'lucide-react';

const Navbar = () =>{
  const activeClass = "bg-clip-text text-transparent bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] font-bold";
  const defaultClass = "text-[#001931]";
  const getNavLinkClass = ({ isActive }) =>{
    return isActive ? activeClass : defaultClass;
  };

  return (
    <div className=""> 
      <div className="fixed top-0 max-w-[1240px] sm:w-full bg-white mx-auto shadow-md z-50 navbar">
        <div className="navbar-start">
          <NavLink to="/" className="flex items-center bg-clip-text text-transparent font-bold bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] ">
            <img className="w-7" src={logo} alt="" /> <p className="text-[12px] lg:text-[17px]">HERO.IO</p> 
          </NavLink>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/" className={getNavLinkClass} end> Home </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className={getNavLinkClass}> Apps </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className={getNavLinkClass}> Installation </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="https://github.com/raiyan3341" className="w-24 lg:w-35 btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white">
           <Github />Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;