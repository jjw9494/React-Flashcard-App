import { useState } from "react";
import "./Styles/editcard.css"

export default function EditCard() {

return (
    <>
    <span className="edit-form-container">
                <div className="edit-question-container">
                    <label htmlFor="edit-form-question-box" className="edit-form-labels">Question: </label>
                    <input
                        // onChange={handleQuestionValue}
                        // value={questionValue}
                        type="text"
                        name="edit-question-input"
                        id="edit-form-question-box"
                    ></input>
                </div>

                <div className="edit-answer-container">
                    <label htmlFor="edit-form-answer-box" className="edit-form-labels">Answer: </label>
                    <input
                        // onChange={handleAnswerValue}
                        // value={answerValue}
                        type="text"
                        name="edit-answer-input"
                        id="edit-form-answer-box"
                    ></input>
                </div>
                <button className="edit-button">Update</button>
            </span>
    </>
)
}