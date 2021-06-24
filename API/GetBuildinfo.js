var jenkinsapi = require("jenkins-api");

var JENKINS_MASTER = process.env.JENKINS_MASTER;
var JENKINS_USERNAME = process.env.JENKINS_USERNAME;
var JENKINS_PASSWORD = process.env.JENKINS_PASSWORD;

var jenkins = jenkinsapi.init(
  "http://" + JENKINS_USERNAME + ":" + JENKINS_PASSWORD + "@" + JENKINS_MASTER
);

export function getAllJobs() {
  return new Promise((resolve, reject) => {
    jenkins.all_jobs(function(err, data) {
      if (err) {
        reject(err);
      } else {
        var finalData = [];
        if (data.length > 0) {
          data.map(function(job) {
            finalData.push({ name: job.name, url: job.url, color: job.color });
          });
        }
        resolve(finalData);
      }
    });
  });
}



// exports.collectData = function(callback) {
//   const getAllJobsPromise = getAllJobs();
//   getAllJobsPromise
//     .then(handleGetJobInfo)
//     .then(handleGetAllBuilds)
//     .then(data => {
//       callback(data);
//     })
//     .catch(err => {
//       callback("ERROR AT JENKINS");
//     });
// };