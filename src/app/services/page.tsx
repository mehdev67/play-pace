"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const painPoints = [
    "Unpaid invoices pile up while you chase payments manually",
    "You're guessing about your market while competitors move faster",
    "Investors ask for pitch decks while you're busy running the business",
    "Your brand feels generic while you struggle to stand out",
    "Customer profiles are unclear while marketing budget gets wasted",
];

export default function ServicesPage() {
    const [currentPainPoint, setCurrentPainPoint] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPainPoint((prev) => (prev + 1) % painPoints.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header with Rotating Pain Points */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 backdrop-blur-md mb-6 transition-all duration-300 hover:scale-105 hover:bg-blue-600/10 hover:border-blue-600/40 hover:shadow-[0_0_20px_-3px_rgba(37,99,235,0.5)]">
                        <Sparkles className="w-4 h-4 text-blue-600" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-blue-600">
                            Our Services
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-800 mb-6">
                        We Get It.{" "}
                        <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">You're Busy.</span>
                    </h1>

                    {/* Animated Pain Point Carousel */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <p className="text-lg text-zinc-500 mb-4">
                            We know you're juggling everything at once.
                        </p>
                        <div className="relative h-20 sm:h-14 flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentPainPoint}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="text-lg sm:text-xl font-medium text-zinc-700 absolute inset-0 flex items-center justify-center px-4 text-center"
                                >
                                    "{painPoints[currentPainPoint]}"
                                </motion.p>
                            </AnimatePresence>
                        </div>
                        <p className="text-lg text-zinc-500">
                            while trying to keep everything afloat.
                        </p>
                    </div>

                    <p className="text-lg text-zinc-500 max-w-3xl mx-auto mb-12">
                        Let us handle what's holding you back so you can focus on what matters most.
                    </p>

                    {/* Two Buttons: Business & Brand */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/services/business-services"
                            className="group relative overflow-hidden rounded-2xl w-64 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(30,58,138,0.3)]"
                        >
                            <div className="flex items-center justify-center px-8 py-5 rounded-2xl bg-gradient-to-r from-[#0a1628] via-[#1e3a5f] to-[#0d2137] transition-all duration-300 group-hover:from-[#1e3a5f] group-hover:via-[#0a1628] group-hover:to-[#1e3a5f]">
                                <span className="text-lg font-semibold text-white">Business Services</span>
                            </div>
                        </Link>

                        <Link
                            href="/services/brand-services"
                            className="group relative overflow-hidden rounded-2xl w-64 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(220,38,38,0.3)]"
                        >
                            <div className="flex items-center justify-center px-8 py-5 rounded-2xl bg-gradient-to-r from-[#991b1b] via-[#dc2626] to-[#b91c1c] transition-all duration-500 group-hover:from-[#dc2626] group-hover:via-[#991b1b] group-hover:to-[#dc2626]">
                                <span className="text-lg font-semibold text-white">Brand Services</span>
                            </div>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
