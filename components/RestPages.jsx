import React, { useState, useEffect } from "react";
import useFetch from "@/pages/api/useFetch";
import Link from "next/link";
import { useGlobalContext } from "../context/context";

function RestPages() {
  const [val, setVal] = useState("");
  const [region, setRegion] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const { isLight } = useGlobalContext();

  // creating a container
  const [display, setDisplay] = useState([]);

  const { data, isLoading, isError } = useFetch("", "all");
  // Case 1. to search
  const { data: searchNewData } = useFetch("name", val); // remember to ask
  // console.log(searchNewData)

  const {
    data: regionArray,
    isLoading: regionLoading,
    isError: regionError,
  } = useFetch("region", region);

  console.log(display);
  console.log(regionArray);

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  // Using the div to create select and option button
  // const handleDropdown = () => {
  //   setIsTrue(!isTrue);
  // };

  // console.log(val)

  // Case 2
  useEffect(() => {
    // setSearchData(
    //   data.filter((item) =>
    //     item.name.common.toLowerCase().includes(val !== "" && val.toLowerCase())
    //   )
    // );

    val
      ? setDisplay(searchNewData)
      : region
      ? setDisplay(regionArray)
      : setDisplay(data);
  }, [val, region, searchNewData, regionArray, data]);

  // console.log(data);

  const handleRegion = (e) => {
    setRegion(e.target.value);
  };

  // const HandleSubmit =() => {

  // }

  return (
    <div className="">
      {/* <input
                    type="text"
                    value={val}
                    onChange={handleChange}
                    id="search-dropdown"
                    class="block p-2.5 w-32 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-100 border-l-2 border border-gray-300 focus:border-gray-600 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Search Country"
                  /> */}

      <div>
        <div class="md:grid md:grid-cols-2 space-y-5 md:space-y-0">
          <div class="col-span-2 md:col-auto flex px-5 md:px-12">
            <input
              type="text"
              value={val}
              onChange={handleChange}
              id="search-dropdown"
              class={`${
                isLight
                  ? "placeholder-gray-700 bg-transparent"
                  : "placeholder-gray-400 bg-transparent"
              } block p-2.5 w-full md:w-72 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-l-gray-100 border-l-2 border-r-0 border border-gray-300 focus:border-gray-600 dark:border-gray-600 dark:text-white`}
              placeholder="Search Country..."
            />
            <button
              // onClick={HandleSubmit}
              type="submit"
              class="p-2.5 text-sm font-medium text-gray-900 dark:text-white bg-transparent rounded-r-lg border border-gray-100 border-l-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-transparent dark:border-gray-600 dark:hover:bg-blue-700"
            >
              <svg
                aria-hidden="true"
                class="w-8 h-5"
                fill="none"
                stroke={`${isLight ? "black" : "white"}`}
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
          </div>

          <div
            class={`${
              isLight ? "text-gray-900" : "text-gray-100"
            } filter-by-region flex col-span-2 md:col-auto px-5 md:ml-auto md:px-12`}
          >
            <select
              name=""
              id=""
              value={region}
              className="py-2.5 bg-transparent w-52 px-2 text-md font-medium border border-gray-300 dark:border-gray-500 dark:text-slate-400 rounded-lg focus:outline-none dark:bg-transparent"
              onChange={handleRegion}
            >
              <option
                value=""
                className="dark:bg-slate-900 block hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                All
              </option>
              <option
                value="Africa"
                className="w-52 dark:bg-slate-900 block hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                Africa
              </option>
              <option
                value="Asia"
                className="w-52 dark:bg-slate-900 block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Asia
              </option>
              <option
                value="Europe"
                className="w-52 dark:bg-slate-900 block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Europe
              </option>
              <option
                value="Oceania"
                className="w-52 dark:bg-slate-900 block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Oceania
              </option>
            </select>

            {/* <button
              onClick={handleDropdown}
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="w-52 flex-shrink-0 z-10 inline-flex justify-around items-center py-2.5 px-2 text-md font-medium text-center text-gray-900 bg-transparent border border-gray-300 dark:border-gray-500 dark:text-slate-400 rounded-lg focus:outline-none dark:bg-transparent"
              type="button"
            >
              Filter by Region{" "}
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button> */}

            {/* {isTrue ? (
              <div
                id="dropdown"
                class="absolute z-10 mt-1.5 bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-slate-900"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdown-button"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Africa
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      America
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Asia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Europe
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Oceania
                    </a>
                  </li>
                </ul>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
      <>
        {isLoading || regionLoading ? (
          <div className="h-[92vh] w-[100%] flex justify-center items-center">
            {" "}
            <div className="w-10 h-10 border-t-2 border-r-4 border-b-6 border-gray-500 animate-spin rounded-full border-dotted"></div>
          </div>
        ) : isError ? (
          <div className="h-[92vh] w-full flex justify-center items-center">
            <h1 className="text-red-600 text-2xl animate-bounce transition-all ease-in-out duration-500">
              Error loading page
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 py-12 px-12 md:px-12 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {display?.map((country, idx) => {
              const {
                name,
                flags,
                capital,
                region,
                population,
                cca3,
                borders,
                subregion,
                tld,
                currencies,
                languages,
              } = country;

              // console.log(languages)
              // const languagesKeys = Object.keys(languages)
              const languagesVal = languages && Object.values(languages);
              // console.log(languagesVal);

              return (
                <>
                  <Link href={`/views/${cca3}`} key={idx}>
                    <div
                      className={`${
                        isLight
                          ? "bg-slate-100 text-slate-900"
                          : "bg-slate-950 text-slate-100 border border-slate-900"
                      } card rounded-md shadow-md md:h-96`}
                    >
                      <div className="flag rounded-t-md">
                        <img
                          src={flags.png}
                          alt={name.common}
                          className="w-full h-40"
                        />
                      </div>
                      <div className="content mt-3 p-3 space-y-2">
                        <h1 className="font-bold text-xl mb-4">
                          {name.common}
                        </h1>
                        <h1 className="">
                          Population: {population.toLocaleString()}
                        </h1>
                        <h1 className="">Region: {region}</h1>
                        <h1 className="">Capital: {capital}</h1>
                        {/* <h1 className="">
                        Languages: <span>{languagesVal?.map((val) => val)}</span>
                      </h1> */}
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        )}
      </>
    </div>
  );
}

export default RestPages;
