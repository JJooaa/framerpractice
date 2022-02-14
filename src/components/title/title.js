import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Title({ isFinished }) {
    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div>
                    <motion.h1
                        className="header"
                        initial={{ x: "-50vh", opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            type: "spring",
                            delay: 1,
                            damping: 30,
                        }}
                        exit={{ y: "-40vh", opacity: 0 }}
                    >
                        Joa Leitola
                    </motion.h1>

                    <motion.h2
                        className="profession"
                        initial={{ x: "-50vh", opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 2,
                            type: "spring",
                            damping: 30,
                        }}
                        exit={{ x: "-40vh", opacity: 0 }}
                    >
                        Front End Web Developer
                    </motion.h2>
                    <motion.h2
                        className="profession"
                        initial={{ x: "-50vh", opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: 3,
                            type: "spring",
                            damping: 30,
                        }}
                        exit={{ y: "40vh", opacity: 0 }}
                    >
                        React Enthusiast
                    </motion.h2>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
