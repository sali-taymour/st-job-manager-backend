import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { JobSource } from "./models/JobSource.js";

dotenv.config();
const user = {
    id: 1,
    username: "hans",
    firstName: "Hans",
    lastName: "Richter",
};
const app = express();
//
app.use(cors());
app.use(express.json());
app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "hans" && password === "123") {
        res.json({
            user,
        });
    } else {
        res.sendStatus(500);
    }
});
const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/st-job-manager";
mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
        console.log({
            error: "Cannot connect to MongoDB database.",
            err: `"${err}"`,
        });
    }
});

const port = process.env.PORT || 3045;

app.post("/login", async (req, res) => {
    res.status(200).json({ username: "hans" });
});

app.get("/", (req, res) => {
    res.send("<h1>Book Site API</h1>");
});
app.get("/job-sources", async (req, res) => {
    const jobSources = await JobSource.find();
    console.log(jobSources);
    res.status(200).json(jobSources);
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
