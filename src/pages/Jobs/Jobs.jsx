import React, { useState } from "react";
import citylist from "../../assets/citylist.json";
import joblist from "../../assets/joblist.json";
import JobCard from "../../components/JobCard";
import { div } from "motion/react-client";

function Jobs() {
  const [searchJob, setSearchJob] = useState("");

  const filteredJob = joblist.filter((job) =>
    job.Title.toLowerCase().includes(searchJob.toLowerCase())
  );
  return (
    <div className="w-full h-screen md:h-[500px] flex justify-center items-start px-2 md:px-4 py-2 ">
      <div className="w-full h-[780px] md:h-[400px] flex-col items-start justify-start bg-web-bg-blue rounded-xl border-web-darkest-blue border-2  ">
        <div className="w-[90%] h-[190px] sm:h-[220px] md:h-[60px] flex flex-col md:flex-row items-start md:items-center justify-start gap-4 border-2 rounded-br-xl px-4 py-1 rounded-tl-xl bg-web-dark-blue">
          <div className="flex items-center gap-1">
            <p className="text-white font-semibold">Job Title:</p>
            <input
              type="search"
              placeholder="Job Title"
              value={searchJob}
              onChange={(e) => setSearchJob(e.target.value)}
              className="sm:w-[400px] h-8 sm:h-10 rounded-lg px-2 outline-web-blue"
            />
          </div>
          <div className="flex items-center gap-1">
            <p className=" text-white font-semibold">Location:</p>
            <select className="h-7 w-[100px] sm:h-10 sm:w-[300px] px-2 rounded-lg text-web-blue outline-none">
              {citylist.map((city, index) => (
                <option key={index}>{city.city}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-1">
            <p className="text-white font-semibold">Exp:</p>
            <select className="h-7 w-[100px] sm:h-10 sm:w-[300px] px-2 rounded-lg text-web-blue outline-none">
              <option value="">0-2</option>
              <option value="">2-5</option>
              <option value="">5+</option>
            </select>
          </div>
          <div className="">
            <button className="bg-white px-3 py-1 rounded-xl border-web-dark-blue border-2 text-web-darkest-blue">
              Search
            </button>
          </div>
        </div>
        
        <div className="w-full h-[570px] sm:h-[550px] md:h-[340px] flex items-center justify-center px-4 py-2 ">
          <div className=" w-full h-full  flex flex-col md:flex-row items-center overflow-y-scroll md:overflow-x-scroll md:py-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 gap-4 py-8">
            {filteredJob.length > 0 ? (
              filteredJob.map((job, index) => <JobCard key={index} job={job} />)
            ) : (
              <div>Loading..</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
