import { useState } from "react";
import "./Styles/flashcards.css";

export default function Flashcard({
    answer,
    question,
    deleteCard,
    id,
    editCard,
}) {
    const [flippedState, setFlippedState] = useState(false);
    return (
        <div
            id={id}
            className="flashcard-item"
            style={
                flippedState == true
                    ? { backgroundColor: "#07b1df" }
                    : { backgroundColor: "#323949" }
            }
            onClick={() => setFlippedState((prev) => !prev)}
        >
            <span className="flashcard-edit-delete">
                <p
                    onClick={editCard}
                    // question={question}
                    // answer={answer}
                    id={id}
                >
                    Edit
                </p>
                <p id={id} className="flashcard-deletebtn" onClick={deleteCard}>
                    ❌
                </p>
            </span>
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
