import Navbar from "../../components/Navbar";
import background from "../../assets/images/Background.png";
import { CiSearch } from "react-icons/ci";
import citylist from "../../assets/citylist.json";
import JobCard from "../../components/JobCard";
import joblist from "../../assets/joblist.json";
import { motion } from "motion/react";
import {
  android,
  employers1,
  employers2,
  employers3,
  employers4,
  employers5,
  employers6,
  employers7,
  employers8,
  fblogo,
  inlogo,
  instlogo,
  ios,
  wplogo,
} from "../../assets/images/imgIndex";

import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="w-full h-auto font-body bg-blue-100 flex flex-col-reverse md:flex-row  items-center justify-between px-12 py-9 ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          
        >
          <p className="text-4xl sm:text-6xl md:text-8xl text-gray-400 font-heading font-bold">
            Find your won
            <br />
            <span className="text-web-blue">Dream</span> Job !
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          
        >
          <img
            className="h-[300px] sm:h-[400px] md:h-[500px]"
            src={background}
            alt=""
          />
        </motion.div>
      </div>

      <div className="flex justify-center font-Logo bg-gray-100">
        <div className="w-[80%] h-auto px-4 bg-blue-100 rounded-b-2xl flex flex-col  md:flex-row justify-center items-center py-2 gap-4 ">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              
              className="bg-blue-500 px-4 py-2 rounded-lg text-center text-white"
            >
              <p>31,091</p>
              <h2>Jobs</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              
              className="bg-yellow-500 px-4 py-2 rounded-lg text-center text-white"
            >
              <p>19,879</p>
              <h2>Employers</h2>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <input
                type="search"
                placeholder="Job Title"
                className="md:w-[400px] h-10 rounded-lg px-2 outline-web-blue"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <select className="h-full  md:w-[300px] px-2 rounded-lg text-web-blue outline-none">
                {citylist.map((city) => (
                  <option>{city.city}</option>
                ))}
              </select>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center items-center w-20"
            >
              <button className="w-full h-full bg-yellow-400 px-4 rounded-lg hover:bg-web-blue hover:text-white duration-300 ">
                Search
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto  justify-center items-center font-Logo bg-gray-100 py-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-web-dark-blue border-gray-400 border-b-2">
            Jobs for you
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=" w-full hidden my-2 items-center justify-center md:grid grid-rows-2 grid-flow-col gap-9 ">
          {joblist.slice(0, 6).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </motion.div>
        <div className="w-full  my-2 items-center justify-center grid md:hidden grid-rows-3 grid-flow-col gap-9 ">
          {joblist.slice(0, 3).map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className=" w-full mt-4 flex justify-center items-center">
          <Link
            to={"/jobs"}
            className=" bg-yellow-300 px-4 py-3 rounded-3xl hover:bg-web-blue hover:text-white duration-300"
          >
            See More Jobs
          </Link>
        </motion.div>
      </div>

      <div className="w-full h-auto font-heading">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center items-center">
          <p className=" text-xl md:text-2xl font-semibold text-web-darkest-blue border-gray-400 border-b-2 ">
            FEATURED EMPLOYERS
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }} className="w-full grid grid-rows-3 md:grid-rows-2 grid-flow-col items-center justify-center gap-x-20 px-4">
          <img src={employers1} alt="" />
          <img src={employers2} alt="" />
          <img src={employers3} alt="" />
          <img src={employers4} alt="" />
          <img src={employers5} alt="" />
          <img src={employers6} alt="" />
          <img src={employers7} alt="" />
          <img src={employers8} alt="" />
        </motion.div>
      </div>

      <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} className="w-full h-[200px] flex flex-col items-center bg-gray-100 px-4 py-2 font-Logo">
        <div className="w-full flex flex-col md:flex-row items-center">
          <div className="md:w-[50%]">
            <h2 className=" text-center text-xl sm:text-3xl font-bold text-web-orange">
              We are now in your
            </h2>
            <div className="mt-2 flex justify-center">
              <img className="h-9 sm:h-auto" src={android} alt="" />
              <img className="h-9 sm:h-auto" src={ios} alt="" />
            </div>
          </div>
          <div className="w-[50%]">
            <h2 className="text-xl sm:text-3xl font-bold text-center text-web-darkest-blue">
              Follow us on:
            </h2>
            <div className="flex justify-center items-center">
              <img className="h-7 sm:h-9" src={fblogo} alt="" />
              <img className="h-6 sm:h-8" src={instlogo} alt="" />
              <img className="h-6 sm:h-8 mr-3" src={inlogo} alt="" />
              <img className="h-7 sm:h-10" src={wplogo} alt="" />
            </div>
          </div>
        </div>
        <div className=" w-full sm:w-[60%] text-[10px] md:text-base mt-4 flex items-center justify-center">
          Terms and conditions | Privacy Policy | Refund / Cancellation Policy |
          About Us | Contact Us | FAQ
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
