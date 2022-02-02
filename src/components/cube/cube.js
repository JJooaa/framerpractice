import React from "react";
import "./cube.css";
import { motion, AnimatePresence } from "framer-motion";

const Cube = ({ isFinished }) => {
    return (
        <AnimatePresence>
            {isFinished === false ? (
                <motion.div
                    initial={{ y: "-100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={
                        isFinished === false
                            ? { duration: 2, type: "spring", delay: 1 }
                            : { duration: 2, type: "spring" }
                    }
                    class="container"
                    drag={true}
                    exit={{ y: "100vh" }}
                >
                    <div class="cube">
                        <div class="face top"></div>
                        <div class="face bottom"></div>
                        <div class="face left"></div>
                        <div class="face right"></div>
                        <div class="face front"></div>
                        <div class="face back"></div>
                    </div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default Cube;
