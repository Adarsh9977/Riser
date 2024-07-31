import React, { useState, useEffect } from "react";
import {
  TbHexagonLetterTFilled,
  TbHexagonLetterWFilled,
  TbChevronLeft,
  TbChevronRight,
  TbUsersGroup,
} from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { IoAnalyticsOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";
import { Link,useLocation } from "react-router-dom";

const navLinks = [
  {
    name: "Analysis",
    icon: IoAnalyticsOutline,
    url: "/dashboard",
  },
  {
    name: "Today",
    icon: TbHexagonLetterTFilled,
    url: "/today",
  },
  {
    name: "Weekly",
    icon: TbHexagonLetterWFilled,
    url:"/weekly"
  },
  {
    name: "My Projects",
    icon: GoProjectRoadmap,
    url:"/myprojects"
  },
  {
    name: "Team",
    icon: TbUsersGroup,
    url:"/teams"
  },
];

const variants = {
  expanded: { width: "220px" },
  nonExpanded: { width: "60px" },
};

const NavigationBar = () => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth < 1100);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth < 1100);
      if (windowWidth < 768) {
        ()=>{
          setIsExpanded(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={
        "bg-gray-200 py-12 flex flex-col border border-r-1 h-screen relative " +
        (isExpanded ? "px-10" : "px-2 duration-500")
      }>
      <div className="logo-div flex space-x-3 justify-center items-center">
        {isExpanded ? (
          <span className="text-3xl font-bold">Riser.</span>
        ) : (
          <span className=" text-3xl font-bold ">R.</span>
        )}
      </div>
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-gray-600 rounded-full absolute -right-2.5 top-14 flex  "
      >
        {isExpanded ? (
          <TbChevronLeft size={20} className="text-white" />
        ) : (
          <TbChevronRight size={20} className="text-white" />
        )}
      </div>
      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <Link key={index} to={item.url}>
            <div
              className={
                "flex space-x-2 p-2 rounded" +(location.pathname.includes(item.url) ?" text-white font-semibold bg-gray-800": " ")
              }
            >
              <item.icon size={24} className="" />
              <span className={isExpanded ? "block" : "hidden"}>
                {item?.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
