import React from "react";
import "./Button.css";
import { AnimatePresence, motion } from "framer-motion";

const Button = ({ nextScreen }) => {
    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <AnimatePresence>
            <motion.button
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{ duration: 1, delay: 1 }}
                className="next-button"
                onClick={() => nextScreen()}
                exit={{ y: 20 }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: "#0c0917",
                        borderRadius: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "100",
                    }}
                >
                    Continue
                </div>
            </motion.button>
        </AnimatePresence>
    );
};

export default Button;
