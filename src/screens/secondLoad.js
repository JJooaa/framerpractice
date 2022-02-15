import React, { useState } from "react";
import Cube from "../components/cube/cube";
import Skills from "../components/skills/skills";
import FindMe from "../components/findme/findme";
const SecondLoad = () => {
    const [isCubeFinished, setIsCubeFinished] = useState(false);

    return (
        <>
            <Cube
                isCubeFinished={isCubeFinished}
                startingPosition={{ x: "-100vh", opacity: 0 }}
                animatePosition={{ x: 0, opacity: 1 }}
            />
            {/* <Skills /> */}
            <FindMe />
        </>
    );
};

export default SecondLoad;
