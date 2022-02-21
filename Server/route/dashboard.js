const express = require("express");
const router = express.Router();
require("../db/connection");

//Connecting Mongodb using MongoClient
// const { MongoClient } = require("mongodb");
// const client = new MongoClient(process.env.DATABASE);
const DashboardSchema = require("../model/companySchema");


router.get("/dashboard", async (req, res, next) => {
	console.log("Dashboard is UP!");
	res.send("Dashboard is UP!");
});

module.exports = router;
