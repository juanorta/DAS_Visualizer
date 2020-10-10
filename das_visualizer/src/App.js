import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import LinkedList from './components/DataStructures/LinkedList/LinkedList';
import Djikstra from './components/Pathfinding/Djikstra/Djikstra';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Home}></Route>

					<Route
						exact
						path="/linkedlist"
						component={LinkedList}
					></Route>
					<Route exact path="/djikstra" component={Djikstra}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
