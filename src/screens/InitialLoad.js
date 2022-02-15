import React, { useState, useEffect, useContext } from "react";
import Cube from "../components/cube/cube";
import "../App.css";
import Title from "../components/title/title";
import { CurrentScreenContext } from "../App";
//import Timer from "../components/timer/timer";
import Button from "../components/Button/Button";
import Stars from "../components/stars/stars";
import FindMe from "../components/findme/findme";
// This component will handle the timeout changes for its children components
// basically animations for this screen

export default function InitialLoad() {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);
    const [isFinished, setisFinished] = useState(false);
    const [y, setY] = useState(false);
    // starts the cube exit animation before changing screen
    const [isCubeFinished, setIsCubeFinished] = useState(false);

    const nextScreen = () => {
        // Start text exit animation
        setisFinished(true);
        setTimeout(() => {
            setY(true);
        }, 3600);
        // start cube exit animation
        setTimeout(() => {
            setIsCubeFinished(true);
        }, 4000);
        // change screen
        setTimeout(() => {
            setCurrentScreen("second-load");
        }, 5000);
    };
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
                <Stars />
                <Title isFinished={isFinished} />
                <div style={{ width: 400, height: 400 }}>
                    <Cube
                        isCubeFinished={isCubeFinished}
                        startingPosition={{ x: "80vh", opacity: 0 }}
                        animatePosition={{ x: 0, opacity: 1 }}
                    />
                </div>
                <Button nextScreen={nextScreen} />
            </div>
            <FindMe y={y} />
        </>
    );
}
