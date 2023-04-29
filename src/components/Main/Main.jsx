import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import './Main.scss';
import Table from "./Table/Table";

export default function Main() {

	const [elements, setElements] = useState(() => (JSON.parse(localStorage.getItem('elements')) || []));
	const [activeElId, setActiveElId] = useState(
		(elements[0] && elements[0].id) || ''
	)

	useEffect(() => {
		localStorage.setItem('elements', JSON.stringify(elements));

	}, [elements])
	useEffect()

	function createElement() {

		let newEl = {
			id: nanoid(),
			title: `New Element ${elements.length + 1}`,
			text: ''
		}
		setElements((prev) => [...prev, newEl]);
		setActiveElId(newEl.id);
	}
	function pickActiveEl(e) {
		setActiveElId(e.target.id);
	}
	function changeElement(e) {


		setElements(prev => prev.map(oldNote => {
			return oldNote.id === activeElId ? { ...oldNote, text: e.target.value } : oldNote;
		}))
	}
	function findActiveEl() {
		return elements.find(el => {
			return el.id === activeElId
		}) || elements[0]
	}




	return (
		<main className="main">
			<div className="main__container">
				<Table
					activeElId={activeElId}
					createElement={createElement}
					elements={elements}
					pickActiveEl={(e) => pickActiveEl(e)}
				/>
				<section className="info">
					<h2 className="info__title">YES</h2>
					{activeElId && <textarea
						className="info__text"
						onChange={(e) => changeElement(e)}
						value={findActiveEl().text}
					></textarea>}
				</section>
			</div>
		</main>
	)
}