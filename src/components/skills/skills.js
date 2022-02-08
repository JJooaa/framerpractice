import React, { useEffect, useState } from "react";
import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.div
            initial={{ x: "200vh", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 1 }}
        >
            <p style={{ fontWeight: 200, fontSize: "1.8rem" }}>
                Self taught Web Developer who is in love with React. <br /> In
                the last year I have taught myself how the web works. <br /> I
                have practiced my skills by doing research and creating
                projects.
            </p>
        </motion.div>
    );
};

export default Skills;
