import { useState } from "react";
import "./Styles/form.css";

function Form() {
    return (
        <>
            <span className="form-container">
                <label htmlFor="form-question-box">Question: </label>
                <input
                    type="text"
                    name="question-input"
                    id="form-question-box"
                ></input>
                <label htmlFor="form-answer-box">Answer: </label>
                <input
                    type="text"
                    name="answer-input"
                    id="form-answer-box"
                ></input>
                <button>Add</button>
            </span>
        </>
    );
}

export default Form;
