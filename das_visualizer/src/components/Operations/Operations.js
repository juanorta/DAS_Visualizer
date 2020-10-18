import React, { useState } from 'react';
import './Operations.css';
import CodeSnippets from '../CodeSnippets/CodeSnippets';

const Operations = (props) => {
	const [createIsClicked, setCreate] = useState(false);
	const [createClass, setCreateClass] = useState('create');
	const [rowClass, setRowClass] = useState('row-btn');
	const [clear, setClear] = useState('clear');
	const [isCleared, setCleared] = useState(false);
	const [randomDropdown, setRandomDropdown] = useState('random-dropdown');
	const [operationBtn, setOperationBtn] = useState('operation-btn');
	const [modalClass, setModalClass] = useState('functionModal');
	const [count, setCount] = useState(0);
	const [numberInserted, setNumberInserted] = useState('');

	function createBtnHandler(params) {
		// console.log('create clicked');
		setCreate(true);
		setCreateClass('create-clicked');
		setRowClass('row-btn-clicked');
		setClear('clear-btn');
	}

	function clearHandler() {
		setCleared(true);
		setClear('clear');
		setCreateClass('create');
		setRowClass('row-btn');
		setOperationBtn('operation-btn');
		props.insertFunction('');
		props.clear();
	}

	function newClickHandler() {
		console.log('empty');
		props.getData('new');
		setRowClass('row-btn');
		setOperationBtn('operation-btn-on');
	}

	function randomClickHandler() {
		props.getData('random');
		setRowClass('row-btn');
		setOperationBtn('operation-btn-on');
	}

	function insertHandler() {
		// console.log('insert clicked');
		// let newCount = count + 1;
		// setCount(newCount);
		setModalClass('functionModal-on');
		// props.insertFunction(10, newCount);
	}

	function handleSubmit(event) {
		event.preventDefault();
		// console.log('NUMBER SUBMITTED = ' + event.target.number.value);
		let newCount = count + 1;
		setCount(newCount);
		props.getData('Inserting');
		props.insertFunction(event.target.number.value, newCount);
		setModalClass('functionModal');
	}

	function exitHandler() {
		setModalClass('functionModal');
	}

	function deleteHandler() {
		let newCount = count - 1;
		setCount(newCount);
		// console.log('deleting...');
		props.getData('Deleting');
		props.deleteFunction(newCount);

		if (newCount == 0) {
			setOperationBtn('operation-btn');
			setRowClass('row-btn-clicked');
		}
	}
	// console.log(createIsClicked);
	// console.log(createClass);
	// console.log(rowClass);
	// console.log(fixedClass);
	// console.log(randomDropdown);

	return (
		<div className="operations-wrapper">
			<div className="column-header">
				<h2>Linked List</h2>
				<button className={createClass} onClick={createBtnHandler}>
					Create
				</button>
				<button className={rowClass} onClick={newClickHandler}>
					New
				</button>
				<button className={rowClass} onClick={randomClickHandler}>
					Random
				</button>

				<button className={clear} onClick={clearHandler}>
					Clear
				</button>
				<div className="operations-wrapper">
					<button className={operationBtn} onClick={insertHandler}>
						Insert
					</button>
					<button className={operationBtn} onClick={deleteHandler}>
						Delete
					</button>
					<button className={operationBtn}>Insert at Index</button>
					<button className={operationBtn}>Delete at Index</button>
					<button className={operationBtn}>Prepend</button>
					<button className={operationBtn}>Get Element</button>
					<button className={operationBtn}>
						Get Element at Index
					</button>
				</div>

				<div className={modalClass}>
					<div>
						<h2>Insert an integer 1-99</h2>
						<form className="insertForm" onSubmit={handleSubmit}>
							<div className="exit" onClick={exitHandler}>
								X
							</div>
							<input
								type="number"
								name="number"
								min="1"
								max="99"
							></input>
							<button type="submit">Submit</button>
						</form>
					</div>
				</div>

				{/* <CodeSnippets hey="hey"/> */}
				{/* <div classNam e={randomDropdown}></div> */}
			</div>
		</div>
	);
};

export default Operations;
