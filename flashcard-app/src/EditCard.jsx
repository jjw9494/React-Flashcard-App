import { useEffect, useState } from "react";
import "./Styles/editcard.css";

export default function EditCard({ updateCardWithText, idValue, db }) {
	//text from editted question box
	const [edittedQuestion, setEdittedQuestion] = useState("");
	//text from editted answer box
	const [edittedAnswer, setEdittedAnswer] = useState("");

	useEffect(() => {
		const objectValues = db.filter((item) => item.id == idValue);
		console.log(objectValues);
		setEdittedQuestion(objectValues[0].question);
		setEdittedAnswer(objectValues[0].answer);
	}, [db, idValue]);

	function handleSubmit() {
		updateCardWithText(edittedQuestion, edittedAnswer);
	}
	function updateQuestionState(e) {
		setEdittedQuestion(e.target.value);
	}
	function updateAnswerState(e) {
		setEdittedAnswer(e.target.value);
	}

	return (
		<>
			<span className="edit-form-container">
				<div className="edit-question-container">
					<label htmlFor="edit-form-question-box" className="edit-form-labels">
						Question:
					</label>
					<textarea
						onChange={updateQuestionState}
						value={edittedQuestion}
						type="text-field"
						name="edit-question-input"
						id="edit-form-question-box"
					></textarea>
				</div>

				<div className="edit-answer-container">
					<label htmlFor="edit-form-answer-box" className="edit-form-labels">
						Answer:
					</label>
					<textarea
						onChange={updateAnswerState}
						value={edittedAnswer}
						type="text-field"
						name="edit-answer-input"
						id="edit-form-answer-box"
					></textarea>
				</div>
				<button className="edit-button" onClick={handleSubmit}>
					Update
				</button>
			</span>
		</>
	);
}
