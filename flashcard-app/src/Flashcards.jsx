import { useState } from "react";
import "./Styles/flashcards.css";
import data from "../db.json";

function FlashcardItem() {
    const [db, setDb] = useState(data);
    console.log(db);
    const flashcardItems = db.map((data) => {
        <div className="flashcard-item">
            <p className="flashcard-emoji">🤔</p>
            <p className="flashcard-text">What is React?</p>
        </div>;
    });

    return <>{flashcardItems}</>;
}
function Flashcards() {
    return (
        <div className="flashcard-grid">
            <FlashcardItem />
        </div>
    );
}

export default Flashcards;
