"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface LoadingScreenProps {
    onComplete?: () => void;
    isLoading?: boolean; // External loading state
}

export default function LoadingScreen({ onComplete, isLoading = true }: LoadingScreenProps) {
    const [stage, setStage] = useState<"initial" | "boot" | "done">("initial");
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        // Simulate initial loading with glitchy progress bar
        const interval = setInterval(() => {
            setProgress((prev) => {
                // Glitchy progress - jumps erratically
                const jump = Math.random() > 0.7 ? Math.random() * 15 : Math.random() * 5;
                const newProgress = Math.min(prev + jump, 100);
                return newProgress;
            });
        }, 150);

        // Move to boot screen after initial load OR when progress reaches 100
        const bootTimer = setTimeout(() => {
            setStage("boot");
            clearInterval(interval);

            // Play sound
            if (audioRef.current) {
                audioRef.current.play().catch((err) => {
                    console.log("Audio play failed:", err);
                });
            }
        }, 1500); // Fast initial loading

        return () => {
            clearInterval(interval);
            clearTimeout(bootTimer);
        };
    }, []);

    useEffect(() => {
        if (stage === "boot") {
            // Fast boot animation - complete in 2 seconds
            const completeTimer = setTimeout(() => {
                setStage("done");
                onComplete?.();
            }, 2000);

            return () => clearTimeout(completeTimer);
        }
    }, [stage, onComplete]);

    useEffect(() => {
        if (progress >= 100 && stage === "initial") {
            setStage("boot");
        }
    }, [progress, stage]);

    return (
        <AnimatePresence>
            {stage !== "done" && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
                >
                    {/* Audio element */}
                    <audio ref={audioRef} preload="auto">
                        <source src="/sounds/boot.mp3" type="audio/mpeg" />
                    </audio>

                    {/* Stage 1: Initial Loading */}
                    {stage === "initial" && (
                        <motion.div
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center justify-center space-y-8"
                        >
                            <motion.h2
                                animate={{
                                    opacity: [1, 0.7, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="text-sm font-light tracking-widest uppercase text-zinc-400"
                                style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 300,
                                    letterSpacing: "0.25em",
                                }}
                            >
                                Loading Business & Brand Services
                            </motion.h2>

                            {/* Glitchy Progress Bar */}
                            <div className="w-80 h-2 bg-zinc-800 rounded-full overflow-hidden relative">
                                {/* Background static effect */}
                                <motion.div
                                    animate={{
                                        x: [0, -20, 0],
                                        opacity: [0.3, 0.5, 0.3],
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        repeat: Infinity,
                                    }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-700 to-transparent"
                                />

                                {/* Main progress bar with glitch effect */}
                                <motion.div
                                    animate={{
                                        width: `${progress}%`,
                                        scaleY: [1, 1.2, 0.9, 1.1, 1],
                                    }}
                                    transition={{
                                        width: { duration: 0.15 },
                                        scaleY: { duration: 0.3, repeat: Infinity },
                                    }}
                                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 relative"
                                    style={{
                                        filter: "brightness(1.2)",
                                    }}
                                >
                                    {/* Glitch overlay */}
                                    <motion.div
                                        animate={{
                                            x: [0, 5, -5, 0],
                                            opacity: [0, 1, 0],
                                        }}
                                        transition={{
                                            duration: 0.2,
                                            repeat: Infinity,
                                            repeatDelay: Math.random() * 0.5,
                                        }}
                                        className="absolute inset-0 bg-cyan-400 mix-blend-screen"
                                    />
                                </motion.div>
                            </div>

                            {/* Percentage with glitch */}
                            <motion.p
                                animate={{
                                    x: [-1, 1, 0],
                                }}
                                transition={{
                                    duration: 0.1,
                                    repeat: Infinity,
                                    repeatDelay: Math.random(),
                                }}
                                className="text-zinc-500 font-mono text-sm"
                            >
                                {Math.floor(progress)}%
                            </motion.p>
                        </motion.div>
                    )}

                    {/* Stage 2: Fast Boot Screen */}
                    {stage === "boot" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center justify-center"
                        >
                            {/* Logo appears FAST */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative"
                            >
                                {/* Glow effect */}
                                <motion.div
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 blur-3xl"
                                    style={{
                                        background:
                                            "radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%)",
                                    }}
                                />

                                {/* Logo */}
                                <Image
                                    src="/logo.png"
                                    alt="PlayPace"
                                    width={200}
                                    height={200}
                                    className="w-48 h-48 object-contain relative z-10"
                                    style={{
                                        filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))",
                                    }}
                                />
                            </motion.div>

                            {/* Text appears quickly */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="mt-8 px-8"
                            >
                                <motion.p
                                    animate={{
                                        opacity: [0.7, 1, 0.7],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="text-[0.65rem] sm:text-xs font-light tracking-widest uppercase whitespace-nowrap"
                                    style={{
                                        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                                        fontWeight: 300,
                                        letterSpacing: "0.25em",
                                        color: "#a0a0a0",
                                    }}
                                >
                                    Interactive Business Development Network
                                </motion.p>

                                {/* Line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mt-4"
                                    style={{ transformOrigin: "center" }}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
