"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";
import { GlowBadge } from "@/components/ui/GlowBadge";

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
                    <div className="mb-6">
                        <GlowBadge icon={<Sparkles className="w-4 h-4 text-blue-600" strokeWidth={1.5} />}>
                            <span className="text-blue-600">Our Services</span>
                        </GlowBadge>
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
                            <MetallicPillButton
                                ref={brandButtonRef}
                                onClick={() => handleTransition("brand", "www.2g2btm.com", brandButtonRef)}
                            >
                                Brand Services
                            </MetallicPillButton>
                        </motion.div>

                        {/* Business Services Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="w-full sm:w-auto"
                        >
                            <MetallicPillButton
                                ref={businessButtonRef}
                                onClick={() => handleTransition("business", "/services/for-business", businessButtonRef)}
                            >
                                Business Services
                            </MetallicPillButton>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
