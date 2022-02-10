import React, { useEffect, useState } from "react";
import "./skills.css";
import { AnimatePresence, motion } from "framer-motion";

const Skills = () => {
    const [textStatus, setTextStatus] = useState("first");
    const [isFinished, setisFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setisFinished(true);
        }, 7000);
        setTimeout(() => {
            setTextStatus("second");
        }, 9000);
        setTimeout(() => {
            setTextStatus("none");
        }, 15000);
    }, []);
    return (
        <AnimatePresence>
            {isFinished === false && (
                <motion.div
                    style={{ width: 1000 }}
                    className="shadow"
                    initial={{ x: "200vh", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring", delay: 1 }}
                    exit={{ x: "200vh" }}
                >
                    <p style={{ fontWeight: 200, fontSize: "1.8rem" }}>
                        Self taught Web Developer who is in love with React.{" "}
                        <br /> In the last year I have taught myself how the web
                        works. <br /> I have practiced my skills by doing
                        research and creating projects.
                    </p>
                </motion.div>
            )}

            {isFinished === true && textStatus === "second" ? (
                <motion.div
                    className="shadow"
                    style={{ width: 1000 }}
                    initial={{ x: "200vh", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, type: "spring", delay: 0.2 }}
                    exit={{ x: "200vh" }}
                >
                    <p style={{ fontWeight: 200, fontSize: "1.8rem" }}>
                        My goal is to become really good at React <br />
                        so that I can create quality web experiences for
                        everyone. <br />
                        Fast forward a few years I see myself as Full Stack Web
                        Developer.
                    </p>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default Skills;
