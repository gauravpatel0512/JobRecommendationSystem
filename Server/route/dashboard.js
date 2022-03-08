const express = require("express");
const router = express.Router();
require("../db/connection");

//Connecting Mongodb using MongoClient
// const { MongoClient } = require("mongodb");
// const client = new MongoClient(process.env.DATABASE);
//Schema
const DashboardSchema = require("../model/companySchema");

router.get("/dashboard/:jobId", async (req, res, next) => {
	try {
		const data = await DashboardSchema.findOne({ jobId: req.params.jobId });
		res.send(data);
		console.log("Job Post found");
	} catch {
		res.status(404);
		res.send({ error: "Job post doesn't exist!" });
	}
});

module.exports = router;
