import { useState } from "react";
import "./Styles/editcard.css";

export default function EditCard({ updateCardWithText, idValue, db }) {
    //text from editted question box
    const [edittedQuestion, setEdittedQuestion] = useState("a");
    //text from editted answer box
    const [edittedAnswer, setEdittedAnswer] = useState("b");
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
                    <label
                        htmlFor="edit-form-question-box"
                        className="edit-form-labels"
                    >
                        Question:{" "}
                    </label>
                    <input
                        onChange={updateQuestionState}
                        value={edittedQuestion}
                        type="text"
                        name="edit-question-input"
                        id="edit-form-question-box"
                    ></input>
                </div>

                <div className="edit-answer-container">
                    <label
                        htmlFor="edit-form-answer-box"
                        className="edit-form-labels"
                    >
                        Answer:{" "}
                    </label>
                    <input
                        onChange={updateAnswerState}
                        value={edittedAnswer}
                        type="text"
                        name="edit-answer-input"
                        id="edit-form-answer-box"
                    ></input>
                </div>
                <button className="edit-button" onClick={handleSubmit}>
                    Update
                </button>
            </span>
        </>
    );
}
