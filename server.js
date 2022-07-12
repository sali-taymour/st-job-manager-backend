import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { JobSource } from "./models/JobSource.js";

dotenv.config();

const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/ejt-job-manager";

mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
        console.log({
            error: "Cannot connect to MongoDB database.",
            err: `"${err}"`,
        });
    }
});

const app = express();
const port = process.env.PORT || 3044;

app.get("/", (req, res) => {
    res.send("<h1>Book Site API</h1>");
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
