import "./App.css";
import { useState } from "react";
import InitialLoad from "./screens/InitialLoad";
import Page1 from "./page1";

function App() {
    const [page, setPage] = useState(0);

    return (
        <div className="App">{page === 0 ? <InitialLoad /> : <Page1 />}</div>
    );
}

export default App;
