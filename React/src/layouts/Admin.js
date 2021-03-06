import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
// import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
// import Maps from "views/admin/Maps.js";
import Resume from "views/admin/Resume.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
	return (
		<>
			<Sidebar />
			<div className="relative md:ml-64 ">
				{/* Header */}
				{/* <HeaderStats /> */}
				<div className="px-4 md:px-10  mx-auto  -m-24">
					<Switch>
						<Route path="/admin/dashboard" exact component={Dashboard} />
						{/* <Route path="/admin/maps" exact component={Maps} /> */}
						<Route path="/admin/resume" exact component={Resume} />
						<Route path="/admin/tables" exact component={Tables} />
						<Redirect from="/admin" to="/admin/dashboard" />
					</Switch>
					{/* <FooterAdmin /> */}
				</div>
			</div>
		</>
	);
}
