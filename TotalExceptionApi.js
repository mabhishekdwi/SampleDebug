import { useEffect, useState } from "react";

const TotalExceptionApi = ({ onFetchBuildDetails }) => {
    const [jenkinsData, setJenkinsData] = useState({})
  useEffect(() => {
    setJenkinsData(onFetchBuildDetails({ build_number: 90, job_name: "abc" }));
    console(jenkinsData);
  }, []);

  return <div>Total Exception</div>>;
};

export default TotalExceptionApi;
