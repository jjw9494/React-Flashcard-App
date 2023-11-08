import { useState } from "react";
import "./Styles/flashcards.css";
import Flashcard from "./Flashcard";

function Flashcards({ db }) {
	return (
		<div>
			<div className="flashcard-grid">
				{db.map(({ id, question, answer }) => (
					<Flashcard key={Number(id)} question={question} answer={answer} />
				))}
			</div>
		</div>
	);
}

export default Flashcards;
