import React from "react";
import HeroImage from "../assets/PF.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-blue-950 via-gray-600 to-gray-500 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold text-whitet text-start">
            I'm a Software Engineer
          </h2>
          <p className="text-white py-4 max-w-md text-justify">
            As a bachelor student in Software Engineering, My passion to build and desgining web and mobile application software.
            Currently, I favor to work on web application and android mobile application development using technologies like
            React, Tailwind, Node JS, Android SDK, Java, Kotlin, and MySQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="pl-10  ">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full w-2/3 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;