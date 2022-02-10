import React, { useContext } from "react";
import "./cube.css";
import { motion, AnimatePresence } from "framer-motion";
import { CurrentScreenContext } from "../../App";

const Cube = ({ isFinished, isCubeFinished }) => {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);

    return (
        <AnimatePresence>
            {currentScreen === "initial-load" && isCubeFinished === false ? (
                <motion.div
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
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
            ) : null}
            {currentScreen === "second-load" && (
                <motion.div
                    initial={{ x: "-200vh", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring" }}
                    className="container"
                    exit={{ x: "-200vh" }}
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
