import { useState } from "react";
import "./Styles/flashcards.css";

export default function Flashcard({ answer, question }) {
	const [flippedState, setFlippedState] = useState(false);

	console.log(flippedState);

	return (
		<div
			className="flashcard-item"
			onClick={() => setFlippedState((prev) => !prev)}
		>
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
