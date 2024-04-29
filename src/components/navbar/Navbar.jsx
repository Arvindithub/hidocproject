


import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiCup } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-gray-100 py-3">
        <div>
          <img
            className="h-2"
            src="https://lawyerist.com/wp-content/uploads/2019/12/hotdocs-logo.png"
            alt=""
          />
        </div>
        <img
              className="h-6 mt-2 mr-5"
              src="https://www.hidoc.co/ad_campaign/pharma/sai_allergy/img/logo.png"
              alt=""
            />
        <div className="flex mt-2">
          <div className="px-2">Drugs</div>
          <div className=" mt-2 h-3 border-black border"></div>

          <div className="px-2">calculators</div>
          <div className=" mt-2 h-3 border-black border"></div>
          <div className="px-2">Articels</div>
          <div className=" mt-2 h-3 border-black border"></div>
          <div className="px-2">News</div>
          <div className=" mt-2 h-3 border-black border"></div>
          <div className="px-2">Quizzes</div>
          <div className=" mt-2 h-3 border-black border"></div>
          <div className="px-2">Surveys</div>
          <div className=" mt-2 h-3 border-black border"></div>
          <div className="px-2">Webinars</div>
          <div className=" mt-2 h-3 border-black border"></div>
          <div className="px-2">Guidelines</div>
        </div>
        <div className="flex mt-2 gap-7">
          <div className="px-2 mt-2">
            <GiHamburgerMenu />
          </div>
          <div className="mt-2 flex border border-black rounded-xl px-3 h-5">
            <TfiCup className="h-3 mt-1" />
            <span className="font-bold text-red-500 -mt-1">274</span>
          </div>
          <div className="border border-black text-center h-8 w-8 rounded-full mr-2 font-bold">
            A
          </div>
        </div>
      </div>
      <div className="bg-blue-100 py-3">
        <div className="text-4xl text-center">Your One Stop Solution for <span className="text-blue-400">MEDICAL LEARNING & UPDATES</span></div>
      </div>
      <div className="flex justify-around bg-blue-50 py-6">
        <div className="text-4xl text-center">Get knowledge of the<span className="text-blue-400 ml-2">APPROVED DRUGS</span> </div>
        <div className="flex rounded-3xl h-10 w-96  bg-blue-100">
            <input className="rounded-3xl h-10 w-96 text-center bg-blue-100 outline-none"  type="text" placeholder="Enter Drug type"/><span className="mt-3 mr-6"><FaSearch /></span>
        </div>
      </div>
    </>
  );
};

export default Navbar;