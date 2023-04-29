import './Calculator.scss';
import { useState, useReducer } from 'react';

export default function Calculator(props) {

	// const symbols = ['AC', 'DEL', "/", "1", "2", "3", "*", "4", "5", "6", "+", "7", "8", "9", "-", ".", "0", "=",];
	// const buttons = symbols.map(item=><button className={``}></button>)

	const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})
	const ACTIONS = {
		CLEAR: 'clear',
		ADD_DIGIT: 'add-digit',
		DELETE_DIGIT: 'delete-digit',
		CHOOSE_OPERATION: 'choose-operation',
		EVALUATE: 'EVALUATE'
	}
	function reducer(state, { type, payload }) {
		switch (type) {
			case ACTIONS.ADD_DIGIT: () => ({ ...state, currentOperand: `${currentOperand}${payload}` })
		}
	}

	dispatch()

	return (
		<section className="calculator">
			<div className="calculator__grid">
				<div className="calculator__output">
					<div className="calculator__previous-value">
						{previousOperand}{operation}
					</div>
					<div className="calculator__current-value">
						{currentOperand}
					</div>
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
