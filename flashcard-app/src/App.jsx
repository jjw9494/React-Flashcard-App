import { useState } from "react";

import "./Styles/App.css";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import data from "../db.json";

function App() {
    const [db, setDb] = useState(data);
    return (
        <>
            <Header />
            <Form setDb={setDb} />
            <Flashcards db={db} setDb={setDb} />
            <Footer />
        </>
    );
}

export default App;
