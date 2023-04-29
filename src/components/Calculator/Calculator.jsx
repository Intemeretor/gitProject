import './Calculator.scss';

export default function Calculator(props) {
	return (
		<section className="calculator">
			<div className="calculator__grid">
				<div className="calculator__output">
					<div className="calculator__previous-value"></div>
					<div className="calculator__current-value"></div>
				</div>
				<button className="calculator__button dbl-btn">AC</button>
				<button className="calculator__button">DEL</button>
				<button className="calculator__button">/</button>
				<button className="calculator__button">1</button>
				<button className="calculator__button">2</button>
				<button className="calculator__button">3</button>
				<button className="calculator__button">*</button>
				<button className="calculator__button">4</button>
				<button className="calculator__button">5</button>
				<button className="calculator__button">6</button>
				<button className="calculator__button">+</button>
				<button className="calculator__button">7</button>
				<button className="calculator__button">8</button>
				<button className="calculator__button">9</button>
				<button className="calculator__button">-</button>
				<button className="calculator__button">.</button>
				<button className="calculator__button">0</button>
				<button className="calculator__button dbl-btn">=</button>
			</div>
		</section>
	)
}
