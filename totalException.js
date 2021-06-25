import Head from "next/head";
// import TotalException from "../components/total-exceptions/TotalException_Dummy";
import TotalExceptionApi from "../components/total-exceptions/TotalExceptionApi.js";

const TotalExceptionPage = ({chartData}) => {
  const fetchBuildDetails = async (jenkinsData) => {
     const response = await fetch('/api/getBuildInfo', {
         method: 'POST',
         body: JSON.stringify(jenkinsData),
         headers: {
             'Content-Type': 'application/json'
         }
     });

     return response.json()
  }

  return (
    <>
      <Head>
        <title>AD - Total Exception</title>
        <meta
         
        />
      </Head>
      {/* <TotalException chartData={chartData}  /> */}
      <TotalExceptionApi onFetchBuildDetails={fetchBuildDetails} />
    </>
  );
}

export default TotalExceptionPage;