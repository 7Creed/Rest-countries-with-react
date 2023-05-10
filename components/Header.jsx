import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { useState } from "react";
import useFetch from "@/pages/api/useFetch";
import { useGlobalContext } from "../context/context";
// import { FaMenu } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export const Header = () => {
  const { isLight, setIsLight } = useGlobalContext();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleFalseNav = () => {
    setNav(false);
  };

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleLightMode = () => {
    setIsLight(!isLight);
  };
  // console.log(isLight)

  return (
    <header
      className={`${
        isLight ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-slate-100"
      } fixed shadow-md w-full grid grid-cols-3 md:grid-cols-2 col-span-2 md:col-span-1 grid-flow-dense px-5 py-6 md:px-12 md:flex md:justify-between md:items-center`}
    >
      <div className="col-span-3 md:col-span-1 shadow-sm flex justify-between md:space-y-0 md:space-x-7">
        <Link href={"/"}>
          {" "}
          <div className="logo font-black text-2xl" onClick={handleFalseNav}>COUNTRY REST</div>
        </Link>
        <AiOutlineMenu
          className={`${ isLight ? "text-gray-900" : "text-gray-200"} text-3xl md:hidden`}
          onClick={handleNav}
        />
        <ul className="hidden md:flex space-x-8 md:space-x-12 md:items-center text-lg">
          <Link href={"/"}>Home</Link>
          <li>Country By Region</li>
        </ul>
      </div>
      {/* <nav className=""> */}
      {/* grid grid-cols-1 */}
      <ul className="hidden md:flex space-y-8 md:space-y-0 md:space-x-5 items-center">
        {/* <input
            type="text"
            name="name"
            className="bg-transparent border rounded px-4 py-1"
            placeholder="Search Country"
          /> */}

        {/* <li class="relativ flex w-ful">
            <input
              type="text"
              id="search-dropdown"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-100 border-l-2 border border-gray-300 focus:border-gray-600 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search Country"
            />
            <button
              type="submit"
              class="p-2.5 text-sm font-medium text-white bg-blue-900 rounded-r-lg border border-gray-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-700 dark:hover:bg-blue-700"
            >
              <svg
                aria-hidden="true"
                class="w-8 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </li> */}

        <li
          className={`${
            isLight ? "border-slate-900" : "border-slate-100"
          } col-span-1 border px-2 py-2 text-center cursor-pointer `}
          onClick={handleLightMode}
        >{`${isLight ? "Dark mode" : "Light mode"}`}</li>
        <li className="col-span-1 text-lg text-center">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
      {/* </nav> */}

      <ul
        className={`${
          nav ? "h-auto p-5" : "h-0"
        } w-[100%] text-right space-y-6 overflow-hidden md:hidden transition-all duration-500 ease-in-out col-span-3`}
      >
        <Link href={"/"} onClick={handleFalseNav}>
          Home
        </Link>
        <li>Country By Region</li>
        <li className="col-span-1 text-lg">
          <Link href={"/about"} onClick={handleFalseNav}>About</Link>
        </li>
        <li
          className={`${
            isLight ? "border-slate-900" : "border-slate-100"
          } w-36 ml-auto border px-2 py-2 cursor-pointer `}
          onClick={handleLightMode}
        >{`${isLight ? "Dark mode" : "Light mode"}`}</li>
      </ul>
    </header>
  );
};
