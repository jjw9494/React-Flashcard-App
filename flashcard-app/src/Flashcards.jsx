import { useState } from "react";
import "./Styles/flashcards.css";

import Flashcard from "./Flashcard";

function Flashcards({db}) {
	
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
