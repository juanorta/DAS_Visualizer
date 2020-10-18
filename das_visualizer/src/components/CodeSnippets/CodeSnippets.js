import React from 'react';
import './CodeSnippets.css';

const CodeSnippets = (props) => {
	console.log('show create = ' + props.showCreate);
	return (
		<div className="code-snippets-wrapper">
			<div className="column-header">
				<h2>{props.snippet} </h2>
				<h3>List size = {props.insertCount}</h3>

				{props.snippet == 'Inserting first element' ? (
					<div>
						<div className="code-wrapper">
							<code>
								{`Node newNode = new Node(${props.number});`}{' '}
								<br />
								{'Node.next = null;'} <br />
							</code>
						</div>
						<div className="code-wrapper">
							<code>
								{'head = newNode;'} <br />
								{'tail = newNode;'} <br />
								{'previous = newNode;'} <br />
							</code>
						</div>
					</div>
				) : null}
				{props.snippet == 'Inserting' ? (
					<div>
						<div className="code-wrapper">
							<code>
								{`Node newNode = new Node(${props.number});`}{' '}
								<br />
								{'Node.next = null;'} <br />
							</code>
						</div>
						<div className="code-wrapper">
							<code>
								{`Node current = tail;`} <br />
								{'previous = current;'} <br />
								{`tail = newNode;`} <br />
								{'previous.next = tail;'} <br />
							</code>
						</div>
					</div>
				) : null}

				{props.snippet == 'Deleting' ? (
					<div>
						<div className="code-wrapper">
							<code>
								{'tail = previous;'} <br />
								{'previous.next = null;'} <br />
							</code>
						</div>
						<div className="code-wrapper">
							<code>
								{'Node current = head;'} <br />
								{'if(current.next.data == tail.data);'} <br />
								{'		previous = current;'} <br />
								{'else'} <br />
								{'		current = current.next;'} <br />
							</code>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default CodeSnippets;
