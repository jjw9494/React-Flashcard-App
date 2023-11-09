import { useState } from "react";
import "./Styles/flashcards.css";
import Flashcard from "./Flashcard";
import EditCard from "./EditCard";


function Flashcards({ db, setDb }) {
	const [editState, setEditState] = useState(false)
	function deleteCard(e) {
		let updatedArray = db.filter((x) => x.id != e.target.id);
		setDb(updatedArray);
	}
	function editCard(e) {
		setEditState(true)
	}

	return (
		<div>
			<div className="flashcard-grid">
				{editState ? <EditCard/>:
				(db.length == 0 ? (
				<p className="flashcard-empty">
					You haven't added any flashcards yet! Start creating your learning
					set.
				</p>
				) : (db.map(({ id, question, answer }) => (
						<Flashcard
							key={Number(id)}
							question={question}
							answer={answer}
							deleteCard={deleteCard}
							id={Number(id)}
							editCard={editCard}
						/>
					))
				))}
			</div>
		</div>
	);
}

export default Flashcards;
