import React, { useContext } from "react";
import "./Button.css";
import { CurrentScreenContext } from "../../App";
import { motion } from "framer-motion";

const Button = ({ display, nextScreen }) => {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);

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
