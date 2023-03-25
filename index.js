const express = require("express");
const app = express();
const schedule = require("node-schedule");

app.get("/", (req, res) => {
  res.send("Express on Vercel");
  // Schedule a job to run every 5 seconds 
    const job = schedule.scheduleJob("*/5 * * * * *", () => {
        console.log("This job runs after 5 seconds. and then cancel it");
        job.cancel();
    });
});

app.listen(3000, () => {
  console.log("Running on port 5000.");
});


// Export the Express API
module.exports = app;