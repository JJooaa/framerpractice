import React, { useState, useEffect, useContext } from "react";
import Button from "../components/Button/Button";
import Cube from "../components/cube/cube";
import Skills from "../components/skills/skills";
import Timer from "../components/timer/timer";
import "./secondLoad.css";
import { CurrentScreenContext } from "../App";

const SecondLoad = () => {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);

    const [isCubeFinished, setIsCubeFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsCubeFinished(true);
        }, 17000);
        setTimeout(() => {
            setCurrentScreen("third-load");
        }, 18000);
    }, [setCurrentScreen]);

    return (
        <>
            {/* <Button display={"initial-load"} delay={2} /> */}
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
                <Cube isCubeFinished={isCubeFinished} />
                <Skills />
            </div>
        </>
    );
};

export default SecondLoad;
