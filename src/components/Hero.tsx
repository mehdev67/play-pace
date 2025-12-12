"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Glitch } from "./Glitch";

const words: Array<{ text: string; variant: 'build' | 'develop' | 'innovate' }> = [
    { text: "Build", variant: "build" },
    { text: "Develop", variant: "develop" },
    { text: "Innovate", variant: "innovate" },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            // Start glitch before transition
            setIsGlitching(true);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % words.length);
            }, 150);

            // Stop glitch after transition
            setTimeout(() => {
                setIsGlitching(false);
            }, 400);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-start pt-48 sm:pt-40 md:items-center md:pt-0 md:-mt-32 justify-center overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-6xl sm:text-7xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[16rem] font-bold mb-6"
                >
                    <span className="relative inline-block text-center">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                                className="inline-block"
                            >
                                <Glitch isActive={isGlitching} variant={words[currentIndex].variant}>
                                    <span className="gradient-text">
                                        {words[currentIndex].text}.
                                    </span>
                                </Glitch>
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </motion.h1>

            </div>
        </section>
    );
}
