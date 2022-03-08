const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
	jobId: String,
	jobTitle: String,
	companyName: String,
	location: String,
	jobType: String,
	description: String,
});

const DashboardSchema = mongoose.model("dice_com_job_us_sample", companySchema);

module.exports = DashboardSchema;
