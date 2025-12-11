"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TransitionType = "brand" | "business" | null;

export default function ServicesPage() {
    const router = useRouter();
    const [activeTransition, setActiveTransition] = useState<TransitionType>(null);
    const [originPosition, setOriginPosition] = useState({ x: 0, y: 0 });
    const brandButtonRef = useRef<HTMLButtonElement>(null);
    const businessButtonRef = useRef<HTMLButtonElement>(null);

    const handleTransition = (
        type: TransitionType,
        href: string,
        buttonRef: React.RefObject<HTMLButtonElement | null>
    ) => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setOriginPosition({
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            });
        }
        setActiveTransition(type);

        // Navigate after animation
        setTimeout(() => {
            // Check if external URL
            if (href.startsWith("http") || href.startsWith("www")) {
                window.location.href = href.startsWith("http") ? href : `https://${href}`;
            } else {
                router.push(href);
            }
        }, 600);
    };

    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20 relative overflow-hidden">
            {/* Page Transition Overlay */}
            <AnimatePresence>
                {activeTransition && (
                    <motion.div
                        initial={{
                            clipPath: `circle(0px at ${originPosition.x}px ${originPosition.y}px)`,
                        }}
                        animate={{
                            clipPath: `circle(200vmax at ${originPosition.x}px ${originPosition.y}px)`,
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className={`fixed inset-0 z-50 ${activeTransition === "brand"
                            ? "bg-gradient-to-br from-red-600 to-red-700"
                            : "bg-gradient-to-br from-blue-600 to-blue-700"
                            }`}
                    />
                )}
            </AnimatePresence>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header Section */}
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

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-800 mb-8">
                        We Get It.{" "}
                        <span className="bg-gradient-to-r from-zinc-600 to-zinc-400 bg-clip-text text-transparent">You&apos;re Busy.</span>
                    </h1>

                    {/* Main Copy */}
                    <div className="max-w-4xl mx-auto space-y-6 mb-12">
                        <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed">
                            We know you&apos;re juggling everything at once. Customers are waiting for responses while you&apos;re trying to close deals. Social media needs updating while your inbox overflows. Your brand needs visibility while operations demand attention.
                        </p>

                        <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed">
                            That&apos;s why we&apos;ve divided our services into two clear tracks – one to build your brand and one to streamline your operations. Both powered by AI that works around the clock, but they solve different challenges in your daily business life.
                        </p>

                        <p className="text-lg sm:text-xl text-zinc-700 font-medium leading-relaxed">
                            Maybe it&apos;s customer service keeping you up at night, or perhaps it&apos;s content production that never gets done. Whatever your pressure point right now, you start here:
                        </p>
                    </div>

                    {/* Two Service Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
                        {/* Brand Services Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="w-full sm:w-auto"
                        >
                            <Button
                                ref={brandButtonRef}
                                size="lg"
                                onClick={() => handleTransition("brand", "www.2g2btm.com", brandButtonRef)}
                                className="relative w-full sm:w-auto h-14 px-8 text-lg font-semibold text-zinc-900 bg-white/10 backdrop-blur-md border border-red-500/30 rounded-xl shadow-[0_0_10px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:bg-white/20 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 active:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                Brand Services
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </motion.div>

                        {/* Business Services Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full sm:w-auto"
                        >
                            <Button
                                ref={businessButtonRef}
                                size="lg"
                                onClick={() => handleTransition("business", "/services/for-business", businessButtonRef)}
                                className="relative w-full sm:w-auto h-14 px-8 text-lg font-semibold text-zinc-900 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-xl shadow-[0_0_10px_rgba(0,0,255,0.5)] hover:shadow-[0_0_20px_rgba(0,0,255,0.5)] hover:bg-white/20 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 active:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                Business Services
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
