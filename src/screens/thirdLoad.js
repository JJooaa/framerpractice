import React from "react";
import Cube from "../components/cube/cube";

const ThirdLoad = () => {
    return (
        <div>
            <Cube
                startingPosition={{ x: "-100vh", opacity: 0 }}
                animatePosition={{ x: 0, opacity: 1 }}
            />
        </div>
    );
};

export default ThirdLoad;
