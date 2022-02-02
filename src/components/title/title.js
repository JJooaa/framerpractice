import React from "react";
import { motion } from "framer-motion";

export default function Title() {
    return (
        <div>
            <motion.h1
                key="modal"
                className="header"
                initial={{ x: "-100vh", opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    type: "spring",
                    delay: 2,
                    duration: 2,
                }}
                exit={{ x: "-100vh" }}
            >
                Joa Leitola
            </motion.h1>

            <motion.h2
                className="profession"
                initial={{ x: "-100vh", opacity: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 3,
                    duration: 2,
                    type: "spring",
                }}
            >
                Front End Web Developer
            </motion.h2>
        </div>
    );
}
