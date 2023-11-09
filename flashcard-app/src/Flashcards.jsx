import { useState } from "react";
import "./Styles/flashcards.css";
import Flashcard from "./Flashcard";
import EditCard from "./EditCard";

function Flashcards({ db, setDb }) {
    //toggle the screen
    const [editState, setEditState] = useState(false);
    //id value of the selected card
    const [idValue, setIdValue] = useState("");
    //placeholder edit text
    const [placeholderQuestionText, setPlaceholderQuestionText] = useState("");
    const [placeholderAnswerText, setPlaceholderAnswerText] = useState("");

    function deleteCard(e) {
        let updatedArray = db.filter((x) => x.id != e.target.id);
        setDb(updatedArray);
    }
    function editCard(e) {
        setIdValue(e.target.id);
        let getQuestionText = db.filter((item) => item.id == idValue);
        setEditState(true);
    }
    function updateCardWithText(question, answer) {
        setEditState(false);
        const placeholderDb = db.map((item) =>
            item.id == idValue
                ? (item = {
                      id: idValue,
                      question: question,
                      answer: answer,
                  })
                : item
        );
        console.log(placeholderDb);
        setDb(placeholderDb);
    }

    return (
        <div>
            <div className="flashcard-grid">
                {editState ? (
                    <EditCard
                        updateCardWithText={updateCardWithText}
                        idValue={idValue}
                        db={db}
                    />
                ) : db.length == 0 ? (
                    <p className="flashcard-empty">
                        You haven't added any flashcards yet! Start creating
                        your learning set.
                    </p>
                ) : (
                    db.map(({ id, question, answer }) => (
                        <Flashcard
                            key={Number(id)}
                            question={question}
                            answer={answer}
                            deleteCard={deleteCard}
                            id={Number(id)}
                            editCard={editCard}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Flashcards;
