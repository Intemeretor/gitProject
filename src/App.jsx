import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Calculator from "./components/Calculator/Calculator";

export default function App() {
	const [darkmode, setDarkmode] = useState(false);
	function changeMode(e) {
		setDarkmode((prev) => (!prev));
	}

	return (
		<div className="wrapper">
			<Header darkmode={darkmode} toggle={(e) => changeMode(e)} />
			<Calculator />
			{/* <Main /> */}
		</div>
	)
}