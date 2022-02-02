import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Page2 from "./page2";
import Page1 from "./page1";

function App() {
    const [animation, setAnimation] = useState(false);
    const [page, setPage] = useState(0);

    return <div className="App">{page === 0 ? <Page2 /> : <Page1 />}</div>;
}

export default App;
