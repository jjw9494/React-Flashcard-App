import { useState } from "react";
import "./Styles/flashcards.css";

export default function Flashcard({ answer, question }) {
	const [flippedState, setFlippedState] = useState(false);

	return (
		<div
			className="flashcard-item"
			onClick={() => setFlippedState((prev) => !prev)}
		>
			<p className="flashcard-emoji">🤔</p>

			{flippedState ? (
				<p className="flashcard-text">{answer}</p>
			) : (
				<p className="flashcard-text">{question}</p>
			)}
		</div>
	);
}
