import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { JobSource } from "./models/JobSource.js";
const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/st-job-manager";
dotenv.config();
const app = express();
const port = process.env.PORT || 3044;

app.get("/", (req, res) => {
    res.send("<h1>Book Site API</h1>");
});
app.get('/job-sources', async (req, res) => {
    const jobSources = await JobSource.find();
    console.log(jobSources)
    res.status(200).json(jobSources);
})



mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
        console.log({ 
            error: "Cannot connect to MongoDB database.",
            err: `"${err}"`,
        });
    }
});


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
