import { useState } from "react";
import "./Styles/flashcards.css";

export default function Flashcard({ answer, question, deleteCard, id }) {
    const [flippedState, setFlippedState] = useState(false);
    return (
        <div
            id={id}
            className="flashcard-item"
            style={
                flippedState
                    ? { backgroundColor: "#07b1df" }
                    : { backgroundColor: "#323949" }
            }
            onClick={() => setFlippedState((prev) => !prev)}
        >
            {" "}
            <p id={id} className="flashcard-deletebtn" onClick={deleteCard}>
                ❌
            </p>
            {flippedState ? (
                <>
                    <p className="flashcard-emoji">🤯</p>
                    <p className="flashcard-text">{answer}</p>
                </>
            ) : (
                <>
                    <p className="flashcard-emoji">🤔</p>
                    <p className="flashcard-text">{question}</p>
                </>
            )}
        </div>
    );
}
