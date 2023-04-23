import './Header.scss';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

export default function Header(props) {

	const [elements, setElements] = useState([]);

	function createNewEl() {
		const newEl = {
			id: nanoid(),
		}
		setElements((prev) => [...prev, newEl]);
	}

	let prom = new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Yeah bitch');
		}, 4000)
	})
	prom.then(
		result => alarm(result),
		error => console.log(error)
	);

	return (
		<header className={`header ${props.darkmode && 'darkmode'}`}>
			<div className="header__container">
				<div className="header__row">
					<nav className="header__navigation">
						<ul className="header__list">
							<li><a href="#" className="header__link">Contacts</a></li>
							<li><a href="#" className="header__link">Prices</a></li>
							<li><a href="#" className="header__link">Something else</a></li>
							<li><a href="#" className="header__link">CLick here</a></li>
						</ul>
					</nav>
					<div className="header__darker darker">
						<span className="darker__text light">Light</span>
						<label
							htmlFor="drk"
							className="darker__toggle"

						></label>
						<span className="darker__text dark">Dark</span>
						<input
							type="checkbox"
							name="drk-checker"
							id="drk"
							checked={props.darkmode}
							onChange={props.toggle}
							onClick={createNewEl}
						/>
					</div>
				</div>
			</div>
		</header>
	)
}