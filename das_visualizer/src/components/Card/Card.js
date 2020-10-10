import React from 'react';
import './Card.css';
import { useHistory, withRouter } from 'react-router';

const Card = (props) => {
	let history = useHistory();
	return (
		<div
			className="card-wrapper"
			onClick={() => {
				history.push('/linkedlist');
			}}
		>
			<div className="card">
				<h3>{props.type}</h3>
			</div>
		</div>
	);
};

export default Card;
