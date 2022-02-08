import React from "react";
import Cube from "../components/cube/cube";
import Skills from "../components/skills/skills";
import "./secondLoad.css";

const SecondLoad = () => {
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
                <Cube />
                <Skills />
            </div>
        </>
    );
};

export default SecondLoad;
