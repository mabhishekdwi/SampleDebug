import React  from "react";

import { getAllJobs } from "./API/GetBuildinfo";

 const getAllJobs = require("./API/GetBuildinfo");

const TotalApiData = () => {
  console.log(getAllJobs.length);
  
  return (
    <div className=" bg-red-to-r from-gray-100 to-gray-50 h-full ">
      <div className="  px-8 py-1 ">
        <p className="text-gray-500 text-lg">Last Execution Details</p>
      
      </div>
    </div>
  );
};

export default TotalApiData;
