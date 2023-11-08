import { useState } from "react";
import "./Styles/flashcards.css";
import Flashcard from "./Flashcard";

function Flashcards({ db, setDb }) {
	function deleteCard(e) {
		// console.log(e.target.id)
		let updatedArray=[]
		function newArray() {
			for (let i=0; i<db.length; i++) {
				if (db[i].id == e.target.id) {
					updatedArray = db.splice(i, i)
				}
			}
		}
		newArray()

		setDb(updatedArray)
	}
	return (
		<div>
			<div className="flashcard-grid">
				{db.map(({ id, question, answer }) => (
					<Flashcard key={Number(id)} question={question} answer={answer} deleteCard={deleteCard} id={Number(id)} />
				))}
			</div>
		</div>
	);
}


export default Flashcards;
