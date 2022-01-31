import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function Resume() {
	// const history = useHistory();

	// const callResumePage = async () => {
	// 	try {
	// 		const res = await fetch("/resume", {
	// 			method: "GET",
	// 			headers: {
	// 				Accept: "application/json",
	// 				"Content-Type": "application/json",
	// 			},
	// 			credentials: "include",
	// 		});

	// 		const data = await res.json();
	// 		console.log(data);

	// 		if (!res.status === 200) {
	// 			const error = new Error(res.error);
	// 			throw error;
	// 		}
	// 	} catch (err) {
	// 		console.log(err);
	// 		history.push("/auth/login");
	// 	}
	// };

	// useEffect(() => {
	// 	callResumePage();
	// }, []);

	return (
		<div className="pt-32">
			<div className="flex flex-wrap">
				<div className="w-full lg:w-8/12 px-4">
					<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
						<div className="rounded-t bg-white mb-0 px-6 py-6">
							<div className="text-center flex justify-between">
								<h6 className="text-blueGray-700 text-xl font-bold">
									My account
								</h6>
								<button
									className="bg-lightBlue-500  text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
									type="button"
								>
									save
								</button>
							</div>
						</div>
						<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
							<form method="GET">
								<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									User Information
								</h6>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Username
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Gaurav.Patel"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Email address
											</label>
											<input
												type="email"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="email@example.com"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												First Name
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Gaurav"
											/>
										</div>
									</div>
									<div className="w-full lg:w-6/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Last Name
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Patel"
											/>
										</div>
									</div>
								</div>

								<hr className="mt-6 border-b-1 border-blueGray-300" />

								<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									Contact Information
								</h6>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-12/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Address
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Appartment, Street Address"
											/>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												City
											</label>
											<input
												type="email"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Mumbai"
											/>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Country
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="India"
											/>
										</div>
									</div>
									<div className="w-full lg:w-4/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												Postal Code
											</label>
											<input
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="Postal Code"
											/>
										</div>
									</div>
								</div>

								<hr className="mt-6 border-b-1 border-blueGray-300" />

								<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
									About Me
								</h6>
								<div className="flex flex-wrap">
									<div className="w-full lg:w-12/12 px-4">
										<div className="relative w-full mb-3">
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor="grid-password"
											>
												About me
											</label>
											<textarea
												type="text"
												className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
												defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
												rows="4"
											></textarea>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="w-full lg:w-4/12 px-4">
					<CardProfile />
				</div>
			</div>
		</div>
	);
}
