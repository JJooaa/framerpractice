import React, { useContext } from "react";
import "./cube.css";
import { motion, AnimatePresence } from "framer-motion";
import { CurrentScreenContext } from "../../App";

const Cube = ({ isCubeFinished, startingPosition, animatePosition }) => {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);

    // Make a single cube with props passed
    // for reuseability

    /* no need for current screen
    isCubeFinished will be passed by parent
    -- initial y and x: 
    -- 
    */
    console.log(startingPosition);
    console.log(isCubeFinished);
    return (
        <AnimatePresence>
            {!isCubeFinished && (
                <motion.div
                    initial={startingPosition}
                    animate={animatePosition}
                    transition={{ duration: 2, type: "spring" }}
                    className="container"
                    exit={{ x: "200vh" }}
                >
                    <div className="cube">
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                        <div className="face left"></div>
                        <div className="face right"></div>
                        <div className="face front"></div>
                        <div className="face back"></div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Cube;
