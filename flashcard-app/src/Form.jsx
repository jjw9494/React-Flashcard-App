import { useState } from "react";
import "./Styles/form.css";

function Form({setDb}) {
const [questionValue, setQuestionValue] = useState("")
const [answerValue, setAnswerValue] = useState("")

function handleQuestionValue(e) {
	const value = e.target.value
	setQuestionValue(value)
}
// console.log(questionValue)

function handleAnswerValue(e) {
	const value = e.target.value
	setAnswerValue(value)
}
function handleSubmit() {
	setDb(prev => [...prev, {id:(Math.random() *10000), question:questionValue, answer:answerValue}])
}
	return (
		<>
			<span className="form-container">
				<div className="question-container">
					<label htmlFor="form-question-box">Question: </label>
					<input
						onChange={handleQuestionValue}
						value={questionValue}
						type="text"
						name="question-input"
						id="form-question-box"
					></input>
				</div>

				<div className="answer-container">
					<label htmlFor="form-answer-box">Answer: </label>
					<input onChange={handleAnswerValue} value={answerValue} type="text" name="answer-input" id="form-answer-box"></input>
				</div>
				<button onClick={handleSubmit}>Add</button>
			</span>
		</>
	);
}

export default Form;
