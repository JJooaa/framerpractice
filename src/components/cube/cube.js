import React, { useContext } from "react";
import "./cube.css";
import { motion, AnimatePresence } from "framer-motion";

const Cube = ({ isCubeFinished, startingPosition, animatePosition }) => {
    const array = [
        "face top",
        "face bottom",
        "face left",
        "face right",
        "face front",
        "face back",
    ];
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
                        {array.map((item, index) => (
                            <div className={item} key={index}></div>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Cube;
