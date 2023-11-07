import { useState } from "react";
import "./Styles/flashcards.css";

function Flashcards() {
    return (
        <div className="flashcard-grid">
            <div className="flashcard-item">
                <p className="flashcard-emoji">🤔</p>
                <p className="flashcard-text">What is React?</p>
            </div>
            <p>Flashcard Component</p>
        </div>
    );
}

export default Flashcards;
