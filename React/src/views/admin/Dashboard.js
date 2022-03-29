import React, { useState, useEffect } from "react";

import Grid from "./Grid";
// import { Wrapper, Content } from "./Dashboard.styles";
// components

import CardData from "components/Cards/CardData.js";
// import data from "../../assets/companyData/dice_com_job_us_samples.json";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
	const [dashboardData, setDashboardData] = useState([]);

	useEffect(() => {
		fetch("/dashboard")
			.then((res) => res.json())
			.then((data) => {
				setDashboardData(data);
			});
	}, []);
	console.log(dashboardData);

	return (
		<div className=" pt-32 xl:w-8/12 mb-12 ">
			<button className="mb-3 bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
				Refresh
			</button>
			{dashboardData.map((job) => (
				<CardData job={job} key={job.jobId} />
			))}
			{/* <CardData /> */}
		</div>

		// <div className=" pt-48">
		// <div className="flex flex-wrap">
		//   <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
		//     <CardLineChart />
		//   </div>
		//   <div className="w-full xl:w-4/12 px-4">
		//     {/* <CardBarChart /> */}
		//   </div>
		// </div>
		// <div className="flex flex-wrap mt-4">
		//   <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
		//     {/* <CardPageVisits /> */}
		//   </div>
		//   <div className="w-full xl:w-4/12 px-4">
		//     {/* <CardSocialTraffic /> */}
		//   </div>
		// </div>
		// </div>
	);
}
