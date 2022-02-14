import React, { useState } from "react";
import Cube from "../components/cube/cube";
import Skills from "../components/skills/skills";
import FindMe from "../components/findme/findme";
const SecondLoad = () => {
    const [isCubeFinished, setIsCubeFinished] = useState(false);

    const style = {
        width: "100%",
        height: "100%",
        position: "relative",
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
            <FindMe />
        </>
    );
};

export default SecondLoad;
