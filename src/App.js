import "./App.css";
import { useState, useEffect } from "react";
import InitialLoad from "./screens/InitialLoad";
import SecondLoad from "./screens/secondLoad";
import ThirdLoad from "./screens/thirdLoad";
import { createContext } from "react";
import Timer from "./components/timer/timer";

export const CurrentScreenContext = createContext();

function App() {
    /* Will create the flow of the page here. Transitioning from screen to screen
    with animations */

    /* 
    currentScreen will take  4-5 different states of which we will render the proper content 
    also this will play a major role in positioning of the cube 
    */

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCurrentScreen("somethingelse");
    //     }, 11000);
    // }, []);
    const [currentScreen, setCurrentScreen] = useState("initial-load");

    return (
        <CurrentScreenContext.Provider
            value={[currentScreen, setCurrentScreen]}
        >
            <div className="App">
                {currentScreen === "initial-load" ? <InitialLoad /> : null}
                {currentScreen === "second-load" ? <SecondLoad /> : null}
                {currentScreen === "third-load" ? <ThirdLoad /> : null}
            </div>
        </CurrentScreenContext.Provider>
    );
}

export default App;
