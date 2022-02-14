import React, { useState } from "react";
import "./findme.css";
import { ReactComponent as GithubLogo } from "../../images/github-icon.svg";
import { ReactComponent as LinkedInLogo } from "../../images/linkedin.svg";
import { AnimatePresence, motion } from "framer-motion";

const FindMe = ({ y }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <AnimatePresence>
            {!y && (
                <motion.div
                    initial={{ y: "10vh" }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", delay: 1, damping: 10 }}
                    className="findme"
                    exit={{ y: "10vh" }}
                >
                    <div>
                        <GithubLogo className="svg" />
                        <p>Github</p>
                    </div>
                    <div>
                        <LinkedInLogo />
                        <p>LinkedIn</p>
                    </div>
                    <div>
                        <GithubLogo />
                        <p>Resume</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FindMe;
