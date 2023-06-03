import React from "react";
import logo from "../assets/logo2.png";
import shipping from "../assets/shipping.png";
import { AiOutlineAppstore,AiOutlineHeart } from "react-icons/ai";
import { RiApps2Line } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {IoIosArrowDown} from "react-icons/io"



const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center cursor-pointer">
        {/* Left */}
        <div className="flex  items-center gap-x-3 shrink-0">
          <div className="hover:bg-[#06529a] p-2 rounded-full">
            <img src={logo} alt="" className="h-10" />
          </div>

          <div className="md:flex items-center gap-2 hidden hover:bg-[#06529a] p-3 rounded-full">
            <AiOutlineAppstore className="text-[17px]" />
            <p className="text-[16px] font-semibold">Departments</p>
          </div>
          <div className="md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full ">
            <RiApps2Line className="text-[20px]" />
            <p className="text-[16px] font-semibold">Services</p>
          </div>
        </div>

        {/* Middle */}
        <div className="hidden relative lg:flex items-center flex-1 mx-6">
          <input
            type="search" placeholder="Search everything at Walmart online and in store"
            className="rounded-full py-1.5 outline-0 flex-1 px-2.5 text-[Black]"
          />
          <div className="absolute bg-[#e8b007] p-1.5 rounded-full right-1.5">
            <GoSearch className="text-black " />
          </div>
        </div>
        {/* Right */}
        <div className="flex  items-center gap-x-2 cursor-pointer">
          <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full">
            <AiOutlineHeart className="text-[17px]"/>
            <div>
            <p className="text-[11px] font-semibold">Reorder</p>
            <div className="font-bold">My items</div>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap cursor-pointer">
            <CgProfile className="text-[20px]" />
            <div>
            <button className="text-[11px] font-semibold">Sign in</button>
            <div className="font-bold">Account</div>
            </div>
          </div>
          <div className="hover:bg-[#06529a] p-3 rounded-full">
            <AiOutlineShoppingCart className="w-7 h-7" />
          </div>
        </div>
      </div>
      {/* Categories */}
      <div className="bg-[#0071dc] mt-[1px] text-white px-3 py-2 lg:px-8 flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
        <img src={shipping} alt="" className="h-7" id="1" />
          <p className="text-[13px] font-bold">Shipping</p>
          <IoIosArrowDown />
          <p className="font-semibold text-[13px]" >|</p>
        </div>
        <div className="flex items-center gap-1">
          <CiLocationOn />
          <p className="text-[14px] cursor-pointer">Karur, 639004</p>
        </div>
        <div className="sub-nav-link-container h3 flex-wrap justify-end overflow-hidden flex-auto f6-m b">
        </div>
        <div className="flex items-right font-bold text-[13px] gap-8">
<div className="hover:underline">Deals</div>
<div className="hover:underline">Mother's day</div>
<div className="hover:underline">Grocery & essentiala</div>
<div className="hover:underline">Home</div>
<div className="hover:underline">Tech</div>
<div className="hover:underline">Fashion</div>
<div className="hover:underline">Auto</div>
<div className="hover:underline">Registry</div>
<div className="hover:underline">Walmart+</div>
        </div>
        </div>
    </div>
  );
};

export default Navbar;
