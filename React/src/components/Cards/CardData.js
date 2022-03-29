import React from "react";
import Chart from "chart.js";

export default function CardData(props) {
	return (
		<>
			{/* <div className="shadow-lg hover:shadow-2xl p-0 text-white relative flex flex-col w-950-px h-110-px grid  mb-6 rounded bg-blueGray-700">
				<div className="m-4 mt-3  text-2xl">Company Name</div>
				<div className="m-6 mt--3">{props.job.description}</div>

				<div className="m-6">USA</div>
				<div className="m-12-rem mt--3-rem">FULL TIME</div>
				<div className="m-10-rem mt--12-rem pl-15-rem ">
					<button className=" bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
						Job Description
					</button>
					<button className=" bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
						Company URL
					</button>
					<button className=" bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
						Career URL
					</button>
				</div>
			</div> */}
			<div className="shadow-lg hover:shadow-2xl p-0 text-white relative flex flex-col w-950-px h-160-px grid  mb-6 rounded bg-blueGray-700">
				<div className="m-4 mt-3  text-2xl">{props.job.companyName}</div>

				<div className="flex flex-col">
					<div className="m-6">{props.job.location}</div>
					<div className="m-12-rem mt--3-rem">{props.job.jobType}</div>
					<div className="m-10-rem mt--12-rem pl-15-rem ">
						<button className=" bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
							Job Description
						</button>
						<button className=" bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
							<a href={props.job.companyUrl}>Company URL</a>
						</button>
						<button className=" bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150">
							<a href={props.job.careerUrl}>Career URL</a>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

// export default function CardData() {
// 	React.useEffect(() => {
// 		var config = {
// 			type: "line",
// 			data: {
// 				labels: [
// 					"January",
// 					"February",
// 					"March",
// 					"April",
// 					"May",
// 					"June",
// 					"July",
// 				],
// 				datasets: [
// 					{
// 						label: new Date().getFullYear(),
// 						backgroundColor: "#4c51bf",
// 						borderColor: "#4c51bf",
// 						data: [65, 78, 66, 44, 56, 67, 75],
// 						fill: false,
// 					},
// 					{
// 						label: new Date().getFullYear() - 1,
// 						fill: false,
// 						backgroundColor: "#fff",
// 						borderColor: "#fff",
// 						data: [40, 68, 86, 74, 56, 60, 87],
// 					},
// 				],
// 			},
// 			options: {
// 				maintainAspectRatio: false,
// 				responsive: true,
// 				title: {
// 					display: false,
// 					text: "Sales Charts",
// 					fontColor: "white",
// 				},
// 				legend: {
// 					labels: {
// 						fontColor: "white",
// 					},
// 					align: "end",
// 					position: "bottom",
// 				},
// 				tooltips: {
// 					mode: "index",
// 					intersect: false,
// 				},
// 				hover: {
// 					mode: "nearest",
// 					intersect: true,
// 				},
// 				scales: {
// 					xAxes: [
// 						{
// 							ticks: {
// 								fontColor: "rgba(255,255,255,.7)",
// 							},
// 							display: true,
// 							scaleLabel: {
// 								display: false,
// 								labelString: "Month",
// 								fontColor: "white",
// 							},
// 							gridLines: {
// 								display: false,
// 								borderDash: [2],
// 								borderDashOffset: [2],
// 								color: "rgba(33, 37, 41, 0.3)",
// 								zeroLineColor: "rgba(0, 0, 0, 0)",
// 								zeroLineBorderDash: [2],
// 								zeroLineBorderDashOffset: [2],
// 							},
// 						},
// 					],
// 					yAxes: [
// 						{
// 							ticks: {
// 								fontColor: "rgba(255,255,255,.7)",
// 							},
// 							display: true,
// 							scaleLabel: {
// 								display: false,
// 								labelString: "Value",
// 								fontColor: "white",
// 							},
// 							gridLines: {
// 								borderDash: [3],
// 								borderDashOffset: [3],
// 								drawBorder: false,
// 								color: "rgba(255, 255, 255, 0.15)",
// 								zeroLineColor: "rgba(33, 37, 41, 0)",
// 								zeroLineBorderDash: [2],
// 								zeroLineBorderDashOffset: [2],
// 							},
// 						},
// 					],
// 				},
// 			},
// 		};
// 		var ctx = document.getElementById("line-chart").getContext("2d");
// 		window.myLine = new Chart(ctx, config);
// 	}, []);
// 	return (
// 		<>
// 			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
// 				<div className="rounded-t mb-0 px-4 py-3 bg-transparent">
// 					<div className="flex flex-wrap items-center">
// 						<div className="relative w-full max-w-full flex-grow flex-1">
// 							<h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
// 								Overview
// 							</h6>
// 							<h2 className="text-white text-xl font-semibold">Sales value</h2>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="p-4 flex-auto">
// 					{/* Chart */}
// 					<div className="relative h-350-px">
// 						<canvas id="line-chart"></canvas>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
