import { useState } from "react";
import "./Styles/flashcards.css";
import data from "../db.json";
import Flashcard from "./Flashcard";

function Flashcards() {
	const [db] = useState(data);
	return (
		<div>
			<div className="flashcard-grid">
				{db.map((card) => (
					<Flashcard
						key={Number(card.id)}
						question={card.question}
						answer={card.answer}
					/>
				))}
			</div>
		</div>
	);
}

export default Flashcards;
