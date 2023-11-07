import { useState } from "react";
import "./Styles/flashcards.css";
import data from "../db.json";

function Flashcards() {
	const [db] = useState(data);
	const [flippedState, setFlippedState] = useState(false);

	let flashcardItems = db.map(({ id, question, answer }) => (
		<div key={id} className="flashcard-item">
			<p className="flashcard-emoji">🤔</p>
			<p className="flashcard-text">{flippedState ? answer : question}</p>
		</div>
	));

	return <div className="flashcard-grid">{flashcardItems}</div>;
}

// If you're interested to know how to flip the state on one specific item without flipping the state on all you can have a look at the function below :) =>

// function Flashcards() {
// 	const [db] = useState(data);

// Creates an array of false values =>
// 	const [flippedState, setFlippedState] = useState(
// 		new Array(db.length).fill(false)
// 	);

// This is what we're using to toggle the true/false value of each item individually, when an item is clicked we pass in the index and then map through the array and invert the existing index of the array from true/false and pass it back to the state as a new array =>
// 	const toggleFlip = (position) => {
// 		const updatedFlippedState = flippedState.map((item, index) =>
// 			index === position ? !item : item
// 		);

// 		setFlippedState(updatedFlippedState);
// 	};

// By decontructing the object we can just use id, question, rather than db.id, db.question etc. Also note that we've used index here to determine the actual index of the item that we're mapping so that we can change the true/false state of that item only.
// We have a ternary operator in here that says if the value of the array at that index is true/false to flip the card
// 	let flashcardItems = db.map(({ id, question, answer }, index) => (
// 		<div key={id} className="flashcard-item" onClick={() => toggleFlip(index)}>
// 			<p className="flashcard-emoji">🤔</p>
// 			<p className="flashcard-text">
// 				{flippedState[index] ? answer : question}
// 			</p>
// 		</div>
// 	));

// 	return <div className="flashcard-grid">{flashcardItems}</div>;
// }

// We may also want to create a new component for the individual flashcard and then pass the db values down as props, can look at this tomorrow :)

export default Flashcards;
