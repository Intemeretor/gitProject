import { useState } from "react";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main";

export default function App() {
	const [darkmode, setDarkmode] = useState(true);
	function changeMode(e) {
		setDarkmode((prev) => (!prev));
	}

	return (
		<div className="wrapper">
			<Header darkmode={darkmode} toggle={(e) => changeMode(e)} />
			<Main />
		</div>
	)
}