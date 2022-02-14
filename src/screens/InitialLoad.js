import React, { useState, useEffect, useContext } from "react";
import Cube from "../components/cube/cube";
import "../App.css";
import Title from "../components/title/title";
import { CurrentScreenContext } from "../App";
//import Timer from "../components/timer/timer";
import Button from "../components/Button/Button";

// This component will handle the timeout changes for its children components
// basically animations for this screen

export default function InitialLoad() {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);
    const [isFinished, setisFinished] = useState(false);

    // starts the cube exit animation before changing screen
    const [isCubeFinished, setIsCubeFinished] = useState(false);

    useEffect(() => {
        // first part where text starts to disappear
        setTimeout(() => {
            setisFinished(true);
        }, 7000);
        // start cube exit animation
        setTimeout(() => {
            setIsCubeFinished(true);
        }, 11000);
        // change screen
        setTimeout(() => {
            setCurrentScreen("second-load");
        }, 11500);
    }, [setCurrentScreen]);

    return (
        <>
            {/* <Button delay={5} display={"second-load"} /> */}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 100,
                }}
            >
                <Title isFinished={isFinished} />
                <div style={{ width: 400, height: 400 }}>
                    <Cube
                        isCubeFinished={isCubeFinished}
                        startingPosition={{ y: "-100vh", opacity: 0 }}
                        animatePosition={{ y: 0, opacity: 1 }}
                    />
                </div>
            </div>
        </>
    );
}
