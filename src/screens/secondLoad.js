import React, { useState, useEffect, useContext } from "react";
//import Button from "../components/Button/Button";
import Cube from "../components/cube/cube";
import Skills from "../components/skills/skills";
//import Timer from "../components/timer/timer";
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

    const style = {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 100,
    };

    return (
        <>
            {/* <Button display={"initial-load"} delay={2} /> */}
            <div style={style}>
                <Cube
                    isCubeFinished={isCubeFinished}
                    startingPosition={{ x: "-100vh", opacity: 0 }}
                    animatePosition={{ x: 0, opacity: 1 }}
                />
                <Skills />
            </div>
        </>
    );
};

export default SecondLoad;
