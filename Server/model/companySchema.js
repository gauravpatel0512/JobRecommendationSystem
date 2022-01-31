const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
	id: String,
	advertiserurl: String,
	company: String,
	employmenttype_jobstatus: String,
	jobdescription: String,
	jobid: String,
	joblocation_address: String,
	jobtitle: String,
	postdate: String,
	shift: String,
	skills: String,
	uniq_id: String,
});

const DashboardSchema = mongoose.model("dice_com_job_us_sample", companySchema);

module.exports = DashboardSchema;
