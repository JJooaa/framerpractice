import React from "react";
import Button from "../components/Button/Button";
import Cube from "../components/cube/cube";
import Skills from "../components/skills/skills";
import Timer from "../components/timer/timer";
import "./secondLoad.css";

const SecondLoad = () => {
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
                <Cube />
                <Skills />
            </div>
        </>
    );
};

export default SecondLoad;
