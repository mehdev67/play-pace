"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { motion } from "framer-motion";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";

export default function LoadingDemoPage() {
    const [showLoading, setShowLoading] = useState(true);

    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">


            {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <h1 className="text-4xl font-bold text-white">
                        Loading Animation <span className="gradient-text">Demo</span>
                    </h1>
                    <p className="text-zinc-400">
                        The epic loading animation has completed. Click the button below to see
                        it again!
                    </p>
                    <MetallicPillButton onClick={() => setShowLoading(true)}>
                        Replay Animation
                    </MetallicPillButton>
                </motion.div>
            </div>
        </div>
    );
}
