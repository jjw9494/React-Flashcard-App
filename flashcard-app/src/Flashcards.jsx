import { useState, useEffect } from "react";
import "./Styles/flashcards.css";
import Flashcard from "./Flashcard";
import EditCard from "./EditCard";

function Flashcards({ db, setDb }) {
	//toggle the screen
	const [editState, setEditState] = useState(false);
	//id value of the selected card
	const [idValue, setIdValue] = useState("");

	function deleteCard(e) {
		let updatedArray = db.filter((x) => x.id != e.target.id);
		setDb(updatedArray);
	}
	function editCard(e) {
		setEditState(true);
		setIdValue(e.target.id);
	}

	function updateCardWithText(question, answer) {
		setEditState(false);
		const placeholderDb = db.map((item) =>
			item.id == idValue
				? (item = {
						id: idValue,
						question: question,
						answer: answer,
				  })
				: item
		);
		setDb(placeholderDb);
	}

	return (
		<div>
			<div className={editState ? "flashcard-flex" : "flashcard-grid"}>
				{editState ? (
					<EditCard
						updateCardWithText={updateCardWithText}
						db={db}
						idValue={idValue}
					/>
				) : db.length == 0 ? (
					<p className="flashcard-empty">
						You haven't added any flashcards yet! Start creating your learning
						set.
					</p>
				) : (
					db.map(({ id, question, answer }) => (
						<Flashcard
							key={Number(id)}
							question={question}
							answer={answer}
							deleteCard={deleteCard}
							id={Number(id)}
							editCard={editCard}
						/>
					))
				)}
			</div>
		</div>
	);
}

export default Flashcards;
