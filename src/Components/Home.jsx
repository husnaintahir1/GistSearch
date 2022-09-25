import React from "react";
import {
  LifebuoyIcon,
  NewspaperIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Gist from "./Gist";
import { useState } from "react";
import GistService from "../services";
import { ClipLoader } from "react-spinners";
function Home() {
  const [value, setValue] = useState("");
  const [gistList, setGistList] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const handleSearch = async (e) => {
    setisLoading(true)
    e.preventDefault();

    let { data } = await GistService.searchUser(value.trim());

    setGistList(data);
    setisLoading(false)
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const supportLinks = [
    {
      name: "Sales",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: PhoneIcon,
    },
    {
      name: "Sales",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: PhoneIcon,
    },
    {
      name: "Sales",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: PhoneIcon,
    },
    {
      name: "Sales",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: PhoneIcon,
    },
    {
      name: "Technical Support",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: LifebuoyIcon,
    },
    {
      name: "Media Inquiries",
      href: "#",
      description:
        "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
      icon: NewspaperIcon,
    },
  ];
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative bg-gray-800 pb-32">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative  mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Github Gists
          </h1>

          <div className="overflow-hidden z-0 rounded-full w-full md:w-10/12 sm:w-10/12 lg:w-6/12 relative p-3 mt-8">
            <form className="relative flex z-50 bg-white rounded-full">
              <input
                type="text"
                onChange={handleChange}
                placeholder="enter your search here"
                className="rounded-full flex-1 px-2 py-2 text-gray-700 focus:outline-none"
              />
              <button
                onClick={handleSearch}
                className="bg-yellow-400 text-white  rounded-r-full font-semibold px-4 py-1 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
              >
                Search
              </button>
            </form>
            <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
            <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
            <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
            <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
          </div>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          { !isLoading? gistList && gistList?.map((gist) => <Gist gist={gist} />):
          <div className="flex justify-center">
        <ClipLoader color={"#60A5FA"} loading={isLoading}  size={50} />

          </div>

          }
        </div>
      </section>
    </div>
  );
}

export default Home;
