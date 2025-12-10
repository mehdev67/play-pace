"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const features = [
    {
        icon: "/icons/icon-presentation.png",
        title: "Presentations",
        description: "Dynamic branded presentations"
    },
    {
        icon: "/icons/icon-web.png",
        title: "Web & Mobile",
        description: "Cross-platform support"
    },
];

export default function ClientScreenSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [glitchIntensity, setGlitchIntensity] = useState(0);
    const [glitchFrame, setGlitchFrame] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"]
    });

    // Update glitch intensity based on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => {
            setGlitchIntensity(value);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Animate glitch frames
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchFrame(prev => prev + 1);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const logoScale = useTransform(scrollYProgress, [0, 1], [0.7, 1.1]);
    const logoOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.2, 0.6, 1]);

    // Calculate random glitch offsets
    const glitchX = Math.sin(glitchFrame * 0.3) * 15 * glitchIntensity;
    const glitchX2 = Math.cos(glitchFrame * 0.5) * 20 * glitchIntensity;
    const sliceY = 30 + Math.sin(glitchFrame * 0.2) * 20;
    const sliceY2 = 60 + Math.cos(glitchFrame * 0.15) * 15;

    return (
        <section ref={containerRef} className="relative py-32 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent" />

            {/* Scan lines effect */}
            <div
                className="absolute inset-0 pointer-events-none opacity-10"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Glitchy Logo */}
                <motion.div
                    style={{ scale: logoScale, opacity: logoOpacity }}
                    className="text-center mb-12"
                >
                    {/* POWERED BY text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-zinc-600 uppercase tracking-[0.4em] text-xs mb-6"
                        style={{
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 300,
                            letterSpacing: "0.4em"
                        }}
                    >
                        Powered By
                    </motion.p>

                    {/* Glitchy Logo Image */}
                    <div className="relative inline-block w-full max-w-2xl mx-auto h-48 sm:h-64">
                        {/* Base logo */}
                        <div
                            className="absolute inset-0"
                            style={{
                                filter: glitchIntensity > 0.3 ? `hue-rotate(${Math.sin(glitchFrame * 0.1) * 10}deg)` : 'none',
                            }}
                        >
                            <Image
                                src="/2g2btm-logo.png"
                                alt="2G2BTM - Too Good To Be True Marketing"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>

                        {/* Glitch layer 1 - Cyan offset */}
                        {glitchIntensity > 0.2 && (
                            <div
                                className="absolute inset-0 mix-blend-screen"
                                style={{
                                    transform: `translateX(${glitchX}px)`,
                                    clipPath: `polygon(0 ${sliceY}%, 100% ${sliceY}%, 100% ${sliceY + 15}%, 0 ${sliceY + 15}%)`,
                                    filter: 'hue-rotate(180deg) saturate(2)',
                                    opacity: 0.8 * glitchIntensity,
                                }}
                            >
                                <Image
                                    src="/2g2btm-logo.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}

                        {/* Glitch layer 2 - Red/Pink offset */}
                        {glitchIntensity > 0.4 && (
                            <div
                                className="absolute inset-0 mix-blend-multiply"
                                style={{
                                    transform: `translateX(${glitchX2}px)`,
                                    clipPath: `polygon(0 ${sliceY2}%, 100% ${sliceY2}%, 100% ${sliceY2 + 20}%, 0 ${sliceY2 + 20}%)`,
                                    filter: 'hue-rotate(-30deg) saturate(1.5)',
                                    opacity: 0.7 * glitchIntensity,
                                }}
                            >
                                <Image
                                    src="/2g2btm-logo.png"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}

                        {/* Random glitch blocks */}
                        {glitchIntensity > 0.6 && glitchFrame % 10 < 3 && (
                            <>
                                <div
                                    className="absolute bg-cyan-500/30"
                                    style={{
                                        left: `${20 + Math.random() * 60}%`,
                                        top: `${Math.random() * 100}%`,
                                        width: `${10 + Math.random() * 30}%`,
                                        height: '3px',
                                    }}
                                />
                                <div
                                    className="absolute bg-red-500/30"
                                    style={{
                                        left: `${Math.random() * 80}%`,
                                        top: `${Math.random() * 100}%`,
                                        width: `${5 + Math.random() * 20}%`,
                                        height: '2px',
                                    }}
                                />
                            </>
                        )}

                        {/* Chromatic aberration effect on high intensity */}
                        {glitchIntensity > 0.7 && (
                            <>
                                <div
                                    className="absolute inset-0 mix-blend-lighten opacity-30"
                                    style={{
                                        transform: `translateX(${-3 * glitchIntensity}px)`,
                                        filter: 'url(#cyan-channel)',
                                    }}
                                >
                                    <Image
                                        src="/2g2btm-logo.png"
                                        alt=""
                                        fill
                                        className="object-contain"
                                        style={{ filter: 'grayscale(1) brightness(2)' }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </motion.div>

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h3
                        className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                        Use Your Brand <span className="text-red-400">Everywhere</span>
                    </h3>
                    <p className="text-zinc-500 max-w-xl mx-auto text-sm">
                        ClientScreen lets you display your brand across all digital touchpoints.
                    </p>
                </motion.div>

                {/* Feature Icons */}
                <div className="flex justify-center gap-8 max-w-md mx-auto">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="text-center group"
                        >
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3">
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h4
                                className="text-white text-xs sm:text-sm font-medium"
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {feature.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
