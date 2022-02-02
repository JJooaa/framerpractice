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
                    transition={{ duration: 2, type: "spring", delay: 1 }}
                    class="container"
                    drag={true}
                    exit={{ opacity: 0 }}
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
