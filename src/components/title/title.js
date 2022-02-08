import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Title({ isFinished }) {
    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div>
                    <motion.h1
                        className="header"
                        initial={{ x: "-100vh", opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            type: "spring",
                            delay: 1,
                            duration: 2,
                            ease: "easeOut",
                        }}
                        exit={{ y: "-300vh" }}
                    >
                        Joa Leitola
                    </motion.h1>

                    <motion.h2
                        className="profession"
                        initial={{ x: "-100vh", opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 2,
                            duration: 2,
                            type: "spring",
                        }}
                        exit={{ x: "-300vh" }}
                    >
                        Front End Web Developer
                    </motion.h2>
                    <motion.h2
                        className="profession"
                        initial={{ x: "-100vh", opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 3,
                            duration: 2,
                            type: "spring",
                        }}
                        exit={{ y: "300vh" }}
                    >
                        React Enthusiast
                    </motion.h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
