import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
import LoginBar from "./components/LoginBar";

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<div className="flex flex-col items-center w-screen min-h-screen h-auto bg-backgroundColor">
			<LoginBar />
			<div className="w-auto m-4 md:w-3/4 h-auto bg-secondaryBgColor rounded">
				<Header />
				<App />
			</div>
		</div>
	</React.StrictMode>
);
