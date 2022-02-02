import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Cube from "../components/cube/cube";
import "../App.css";
import Title from "../components/title/title";

export default function InitialLoad() {
    const [isFinished, setisFinished] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setisFinished(true);
        }, 7000);
    }, []);

    return (
        <>
            <Title isFinished={isFinished} />
            <Cube isFinished={isFinished} />
        </>
    );
}
