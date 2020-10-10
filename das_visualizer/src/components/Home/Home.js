import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Grid, Paper } from '@material-ui/core';
import Card from '../Card/Card';

function Home() {
	return (
		<div className="home">
			<Navbar />
			<div className="section-wrapper">
				<h1>Data Structures</h1>{' '}
				<Grid container spacing={3}>
					<Grid className="linked-list" item lg={2} sm={1}>
						<Card type="Linked List" />
					</Grid>
					<Grid className="stack" item lg={2} sm={1}>
						<Card type="Stack" />
					</Grid>
					<Grid className="queue" item lg={2} sm={1}>
						<Card type="Queue" />
					</Grid>
					<Grid className="hash" item lg={2} sm={1}>
						<Card type="Hash Table" />
					</Grid>
					<Grid className="bst" item lg={2} sm={1}>
						<Card type="Binary Search Tree" />
					</Grid>
				</Grid>
			</div>
			<div className="section-wrapper">
				<h1>Pathfinding Algorithms</h1>
				<Grid container spacing={3}>
					<Grid className="linked-list" item lg={2} sm={1}>
						<Card type="Djikstra's Algorithm" />
					</Grid>
					<Grid className="stack" item lg={2} sm={1}>
						<Card type="A* Search" />
					</Grid>
					<Grid className="queue" item lg={2} sm={1}>
						<Card type="Breadth-First Search" />
					</Grid>
					<Grid className="hash" item lg={2} sm={1}>
						<Card type="Depth-First Search" />
					</Grid>
				</Grid>
			</div>
			<div className="section-wrapper">
				<h1>Sorting Algorithms</h1>
				<Grid container spacing={3}>
					<Grid className="linked-list" item lg={2}>
						<Card type="Merge Sort" />
					</Grid>
					<Grid className="stack" item lg={2}>
						<Card type="Quick Sort" />
					</Grid>
					<Grid className="queue" item lg={2}>
						<Card type="Bubble Sort" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Home;
