import { useState } from "react";
import "./Styles/flashcards.css";

export default function Flashcard({ answer, question, deleteCard, id }) {
	const [flippedState, setFlippedState] = useState(false);

	console.log(flippedState);

	return (
		<div
			id={id}
			className="flashcard-item"
			onClick={() => setFlippedState((prev) => !prev)}
		> <p id={id} className="flashcard-deletebtn" onClick={deleteCard}>❌</p>
			{flippedState ? (
				<>
					<p className="flashcard-emoji">🤯</p>
					<p className="flashcard-text">{answer}</p>
				</>
			) : (
				<>
					<p className="flashcard-emoji">🤔</p>
					<p className="flashcard-text">{question}</p>
				</>
			)}
		</div>
	);
}
