import "./App.css";
import { useState } from "react";
import InitialLoad from "./screens/InitialLoad";

function App() {
    /* Will create the flow of the page here. Transitioning from screen to screen
    with cool animations */
    const [currentScreen, setCurrentScreen] = useState(0);

    return (
        <div className="App">
            {currentScreen === 0 ? <InitialLoad /> : null}
        </div>
    );
}

export default App;
