import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { FaShareAlt } from "react-icons/fa";

function JobCard({ job }) {
  return (
    <div className="group ">
      <div className="relative md:w-[350px] md:h-[260px] w-[300px] h-[250px]  border-web-blue border-2 rounded-lg px-4 group-hover:bg-slate-800 duration-300 hover:drop-shadow-card-shadow">
        <div className="absolute right-0 bg-yellow-300 px-5 rounded-bl-lg rounded-tr-lg py-1">
          Exp: {job.Exp}
        </div>
        <div className=" flex items-start  py-2 ">
          <div className=" bg-green-200 border-2 border-green-700 px-3 rounded-2xl flex items-center justify-center gap-2">
            <div className="h-[5px] w-[5px] bg-green-500 rounded-full shadow-xl shadow-green-300"></div>
            <p>{job.Mode}</p>
          </div>
        </div>
        <div className="mt-4 group-hover:text-white">
          <h1 className="font-semibold mb-2">{job.Title}</h1>
          <div className="flex items-center gap-1">
            <FaRegBuilding />
            <p>{job.Company}</p>
          </div>
          <div className="flex items-center gap-1">
            <CiLocationOn />
            <p>{job.Location}</p>
          </div>
          <div className="flex items-center gap-1">
            <MdWorkOutline />
            <p>{job.Type}</p>
          </div>
          <div className="flex items-start justify-between mt-4">
            <button className="border-2 border-web-blue group-hover:border-none group-hover:bg-blue-600 group-hover:text-white px-5 py-1 rounded-xl">
              Apply
            </button>
            <div  className="flex ">
              <div className="flex hover:bg-web-blue text-black hover:text-white hover:border-0 bg-white px-4 py-2 rounded-l-lg border-web-blue border-2">
                <IoIosSave />
              </div>
              <div className="flex bg-white px-4 py-2 hover:bg-web-blue hover:border-0 hover:text-white text-black rounded-r-lg border-l-0 border-web-blue  border-2">
                <FaShareAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
