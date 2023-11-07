// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./Styles/App.css";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";

function App() {
	return (
		<>
			<Header />
			<Form />
			<Flashcards />
			<Footer />
		</>
	);
}

export default App;
