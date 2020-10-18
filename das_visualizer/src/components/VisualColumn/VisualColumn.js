import React, { useState } from 'react';
import './VisualColumn.css';
import { FaLongArrowAltRight, FaLongArrowAltDown } from 'react-icons/fa';

const VisualColumn = (props) => {
	const [head, setHead] = useState(0);
	const [tail, setTail] = useState(0);
	const [current, setCurrent] = useState(0);
	const [previous, setPrevious] = useState(0);
	//	const [nodeClass, setNodeClass] = useState('node');
	let list2 = [];
	let nodeClass = 'node';
	let snippet = props.snippet;
	let insert = false;
	let in1 = '';

	// if (props.size == 1) {
	// 	nodeClass = 'node-head';
	// }
	var list = [];
	console.log(snippet);
	if (snippet == 'Inserting' || snippet == 'Inserting first element') {
		for (let i = 0; i < props.size; i++) {
			if (i == 0) {
				nodeClass = 'node-head';
			} else if (i == props.size - 1) {
				nodeClass = 'node-tail';
			} else if (i == props.size - 2) {
				nodeClass = 'node-previous';
			} else {
				nodeClass = 'node';
			}
			list.push(
				<div className="list-btns">
					<button className={nodeClass} key={i}>
						{props.linkedlist[i]}
					</button>
					<FaLongArrowAltRight className="arrow" />
				</div>
			);
		}
	} else if (snippet == 'Deleting') {
		for (let i = 0; i < props.size; i++) {
			if (i == 0) {
				nodeClass = 'node-head-delete';
			} else if (i == props.size - 1) {
				nodeClass = 'node-tail-delete';
			} else if (i == props.size - 2) {
				nodeClass = 'node-previous-delete';
			} else {
				nodeClass = 'node';
			}
			list.push(
				<div className="list-btns">
					<button className={nodeClass} key={i}>
						{props.linkedlist[i]}
					</button>
					<FaLongArrowAltRight className="arrow" />
				</div>
			);
		}
	}

	// for (let i = 0; i < props.size; i++) {
	// 	list2.push(list[i]);
	// 	// alert('hey');
	// 	if (i == 0) {
	// 		list2[i] = (
	// 			<div className="list-btns">
	// 				<button className="node-head" key={i}>
	// 					{props.linkedlist[i]}
	// 				</button>
	// 				<FaLongArrowAltRight className="arrow" />
	// 			</div>
	// 		);
	// 	}
	// }

	function hey() {
		alert('hey');
	}

	return (
		<div className="visual-column-wrapper">
			<h2>Visualization</h2>
			<div className="steps">
				Step by step
				{snippet == 'Inserting first element' ? (
					<div>
						<p className="in-1">Creating newNode</p>
						<p className="in-2">
							Setting 'head', 'tail', and 'previous' pointers to
							newNode
						</p>
					</div>
				) : null}
				{snippet == 'Inserting' ? (
					<div>
						<p className="in-1">Creating newNode</p>
						<p className="i-2">
							Setting 'previous' pointer to current tail
						</p>
						<p className="i-3">Setting 'tail' pointer to newNode</p>

						<p className="i-4">Connecting 'previous' to 'tail'</p>
					</div>
				) : null}
			</div>
			<div className="list-wrapper">
				<h1 style={{ marginTop: '20rem' }}>{list} </h1>
			</div>
		</div>
	);
};

export default VisualColumn;
