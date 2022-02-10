import React, { useState, useEffect, useContext } from "react";
import Cube from "../components/cube/cube";
import "../App.css";
import Title from "../components/title/title";
import { CurrentScreenContext } from "../App";
import Timer from "../components/timer/timer";
// This component will handle the timeout changes for its children components
// basically animations for this screen

export default function InitialLoad() {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);
    const [isFinished, setisFinished] = useState(false);
    const [isCubeFinished, setIsCubeFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setisFinished(true);
        }, 7000);
        setTimeout(() => {
            setIsCubeFinished(true);
        }, 11000);
        setTimeout(() => {
            setCurrentScreen("second-load");
        }, 11500);
    }, [setCurrentScreen]);

    return (
        <>
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
                        isFinished={isFinished}
                        isCubeFinished={isCubeFinished}
                    />
                </div>
            </div>
        </>
    );
}
