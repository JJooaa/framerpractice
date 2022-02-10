import React, { useContext } from "react";
import "./Button.css";
import { CurrentScreenContext } from "../../App";
import { motion } from "framer-motion";

const Button = ({ display, delay }) => {
    const [currentScreen, setCurrentScreen] = useContext(CurrentScreenContext);

    const handleClick = () => {
        setCurrentScreen(display);
    };

    const variants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    return (
        <motion.button
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 2, delay: delay }}
            className="next-button"
            onClick={() => handleClick()}
        >
            Continue
        </motion.button>
    );
};

export default Button;
