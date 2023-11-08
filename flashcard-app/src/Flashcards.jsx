import { useState } from "react";
import "./Styles/flashcards.css";
import Flashcard from "./Flashcard";

function Flashcards({ db, setDb }) {
    function deleteCard(e) {
        let updatedArray = db.filter((x) => x.id != e.target.id);
        setDb(updatedArray);
    }

    return (
        <div>
            <div className="flashcard-grid">
                {db.map(({ id, question, answer }) => (
                    <Flashcard
                        key={Number(id)}
                        question={question}
                        answer={answer}
                        deleteCard={deleteCard}
                        id={Number(id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Flashcards;
