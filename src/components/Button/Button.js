import React from "react";
import "./Button.css";
import { motion } from "framer-motion";

const Button = ({ nextScreen }) => {
    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <motion.button
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 7 }}
            className="next-button"
            onClick={() => nextScreen()}
        >
            Continue
        </motion.button>
    );
};

export default Button;
