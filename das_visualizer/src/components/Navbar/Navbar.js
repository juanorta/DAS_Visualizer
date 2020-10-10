import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { FaCaretDown } from 'react-icons/fa';
import { useHistory, withRouter } from 'react-router';
// import { useHistory } from 'react-router-dom';

function Navbar() {
	let history = useHistory();
	const [values, setValues] = useState({
		dsVisible: false,
		dsClassToggle: 'ds',
	});

	function logoClickHandler() {
		console.log('clicked');
		history.push('/');
	}

	function linkedlistClickHandler() {
		history.push('/linkedlist');
	}

	function djikstraClickHandler() {
		history.push('/djikstra');
	}

	return (
		<div className="navbar">
			<div className="logo" onClick={logoClickHandler}>
				<h2>DPS Visualizer</h2>
			</div>
			<div className="sections">
				<ul className="list">
					<li className="ds">
						Data Structures{' '}
						<FaCaretDown style={{ marginBottom: '-0.2rem' }} />
						<ul className="ds-dropdown">
							<li onClick={linkedlistClickHandler}>
								Linked List
							</li>
							<li>Stack</li>
							<li>Queue</li>
							<li>Hash Table</li>
							<li>BST</li>
						</ul>
					</li>

					<li className="search">
						Pathfinding Algorithms{' '}
						<FaCaretDown style={{ marginBottom: '-0.2rem' }} />
						<ul className="ds-dropdown">
							<li onClick={djikstraClickHandler}>
								Djikstra's Algorithm
							</li>
							<li>BFS</li>
							<li>DFS</li>
							<li>A* Search</li>
						</ul>
					</li>

					<li className="sort">
						Sorting Algorithms{' '}
						<FaCaretDown style={{ marginBottom: '-0.2rem' }} />
						<ul className="ds-dropdown">
							<li onClick={linkedlistClickHandler}>Merge Sort</li>
							<li>Bubble Sort</li>
							<li>Quick Sort</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
