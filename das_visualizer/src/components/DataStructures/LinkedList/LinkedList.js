import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Grid, Paper } from '@material-ui/core';
import Operations from '../../Operations/Operations';
import VisualColumn from '../../VisualColumn/VisualColumn';
import CodeSnippets from '../../CodeSnippets/CodeSnippets';
var Linked = require('mnemonist/linked-list');
var list = new Linked();

function LinkedList() {
	let newArray = new Array();

	const [snippet, setSnippet] = useState('Create a Linked List');
	const [insertNumber, setInsertNumber] = useState('');
	const [showCreate, setCreate] = useState(false);
	const [insertCount, setInsertCount] = useState(0);

	function getData(val) {
		console.log(val);
		if (val == 'new') {
			setSnippet('Insert a value');
		} else if (val == 'random') {
			setSnippet('Choose function');
		} else if (val == 'Inserting') {
			setSnippet(`Inserting`);
		} else if (val == 'Deleting') {
			setSnippet('Deleting');
		}
	}

	function insertHandler(number, count) {
		// console.log('number inserted = ' + number);
		// console.log('insert count = ' + count);
		setInsertCount(count);
		setInsertNumber(number);
		setCreate(true);
		list.push(number);

		if (count == 1) {
			setSnippet('Inserting first element');
		}
	}

	function deleteHandler(count) {
		// console.log('last number deleted = ');
		// console.log('list size = ' + count);

		setInsertCount(count);
		let array2 = list.toArray();
		let size = list.size;
		console.log('ARRAY 2 = ' + array2);
		list.clear();
		for (let i = 0; i < size - 1; i++) {
			list.push(array2[i]);
		}
		if (insertCount == 1) {
			setCreate(false);
			setSnippet('Create a linked list');
		}
	}

	function clear() {
		setSnippet('Create a Linked List');
		list.clear();
		setCreate(false);
	}
	// list.forEach((element, index) => {
	// 	console.log('index = ' + index, 'element = ' + element);
	// });
	let size = list.size;
	let linkedlist = list.toArray();
	console.log(linkedlist);

	return (
		<div>
			<Navbar />
			<div className="ll-wrapper">
				<Grid container>
					<Grid className="operations" item lg={3} sm={1}>
						<Operations
							getData={getData}
							insertFunction={insertHandler}
							clear={clear}
							deleteFunction={deleteHandler}
						/>
					</Grid>
					<Grid className="visualization" item lg={6} sm={1}>
						<VisualColumn
							linkedlist={linkedlist}
							size={size}
							snippet={snippet}
						/>
					</Grid>
					<Grid className="code-snippets" item lg={3} sm={1}>
						<CodeSnippets
							snippet={snippet}
							number={insertNumber}
							showCreate={showCreate}
							insertCount={insertCount}
						/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}
export default LinkedList;
