export default function Table(props) {

	let array = props.elements.map(item => [
		<li
			onClick={() => props.pickActiveEl(item.id)}
			id={item.id} key={item.id}
			className={`table__elements ${item.id === props.activeElId ? 'picked' : ''}`}
		>
			<h3>{item.title}</h3>
			<button onClick={(e) => props.deleteElement(e, item.id)} className="gg-trash"></button>
		</li>
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
			{props.elements.length > 0 &&
				<ul className="table__row">
					{array.length > 0 && array}
				</ul>
			}

		</section>
	)
}