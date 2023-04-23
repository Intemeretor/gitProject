export default function Table(props) {
	let array = props.elements.map(item => [
		<li
			onClick={props.pickActiveEl}
			id={item.id} key={item.id}
			className={`table__elements ${item.id === props.activeElId && 'picked'}`}
		>{item.title}</li>
	]
	);
	return (
		<section className="table">
			<div className="table__top">
				<h1 className="table__title">Things:</h1>
				<button
					className="table__button"
					onClick={props.createElement}

				>+</button>
			</div>
			<ul className="table__row">
				{array.length > 0 && array}
			</ul>
		</section>
	)
}