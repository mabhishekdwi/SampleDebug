var jenkinsapi = require("jenkins-api");

var JENKINS_MASTER = process.env.JENKINS_MASTER;
var JENKINS_USERNAME = process.env.JENKINS_USERNAME;
var JENKINS_PASSWORD = process.env.JENKINS_PASSWORD;

var jenkins = jenkinsapi.init(
  "http://" + JENKINS_USERNAME + ":" + JENKINS_PASSWORD + "@" + JENKINS_MASTER
);

export default function (req, res) {
    const build_number = req.body.build_number;
    const jobName = req.body.job_name;
    jenkins.build_info(jobName, build_number, function(err, data) {
        if (err){ return console.log(err); }
        console.log(data)
      });
}