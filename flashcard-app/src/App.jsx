import { useState, useEffect } from "react";

import "./Styles/App.css";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import data from "../db.json";

function App() {
	const [db, setDb] = useState(data);
	const [count, setCount] = useState(db.length);

	useEffect(() => {
		setCount(db.length);
	}, [db]);

	return (
		<>
			<Header />
			<Form setDb={setDb} />
			<Flashcards db={db} setDb={setDb} />
			<Footer count={count} />
		</>
	);
}

export default App;
