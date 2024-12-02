import React, { useState } from "react";
import logo from "../assets/images/jobringerlogo.jpg";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { to: "/", label: "Home" },
  { to: "jobs", label: "Jobs" },
  { to: "active-employers", label: "Active Employers" },
  { to: "pricing", label: "Pricing" },
];
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  return (
    <div className=" sticky top-0 z-10 bg-white w-full h-12 md:h-16 flex items-center justify-between px-4 py-2 shadow-md">
      <Link to={"/"}>
        <h1 className="text-black font-Logo tracking-wider text-xl md:text-2xl font-bold ">
          Job<span className="text-web-blue">Ringer</span>
        </h1>
        <h1 className="border-black border-t-2 text-[10px] md:text-xs w-fit">
          India's job portal
        </h1>
      </Link>
      <ul className="hidden font-Logo md:flex items-center gap-3 text-[17px]">
        {links.map(({ to, label }) => (
          <li className="" key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `duration-200 border-web-blue  ${
                  isActive ? "border-b-2 font-semibold" : ""
                }  `
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li className="px-3 py-2 border-[1px] border-web-blue rounded-3xl hover:bg-yellow-400 hover:text-white hover:border-none duration-300">
          <Link to={"jobseeker-login"}>Jobseeker Login</Link>
        </li>
        <li className="bg-yellow-400 px-3 py-2 rounded-3xl hover:bg-web-blue hover:text-white duration-300">
          <Link to={"employer-login"}>Employer Login</Link>
        </li>
      </ul>
      <div className="md:hidden" onClick={toggleMenu}>
        <FaBars className="text-2xl " />
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-56 h-screen bg-white  top-0 right-0 z-10"
          >
            <div
              className="text-black text-xl text-right absolute right-4 top-4 cursor-pointer"
              onClick={toggleMenu}
            >
              <MdClose />
            </div>
            <div className="w-full h-full text-xl flex flex-col justify-center items-center gap-8 text-white">
              {links.map(({ to, label, index }) => (
                <NavLink
                  key={index}
                  onClick={toggleMenu}
                  to={to}
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive
                        ? "text-black font-semibold border-b-2 border-web-dark-blue"
                        : "text-gray-500"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
