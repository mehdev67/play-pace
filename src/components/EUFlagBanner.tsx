"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface EUFlagBannerProps {
    title?: string;
    subtitle?: string;
}

export default function EUFlagBanner({
    title = "Recognized & Co-funded by the European Union",
    subtitle = "Pioneering sustainable solutions that empower people, businesses and the planet."
}: EUFlagBannerProps) {

    // EU flag URLs - using Wikipedia Commons (free to use)
    const flagSvgUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg";
    const animatedFlagUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Animated_flag_of_Europe.gif";

    return (
        <div className="relative w-full max-w-3xl mx-auto my-16">
            {/* Blurred flag background - shows outside the glass */}
            <div className="absolute inset-0 -inset-x-32 -inset-y-16 overflow-hidden pointer-events-none">
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ filter: "blur(12px)", opacity: 0.4 }}
                >
                    <Image
                        src={animatedFlagUrl}
                        alt=""
                        width={600}
                        height={400}
                        className="w-full h-full object-cover scale-150"
                        unoptimized
                    />
                </div>
            </div>

            {/* Glass card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative glass-card p-8 overflow-hidden"
            >
                {/* Clear flag inside the glass - visible through the glass */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center opacity-25">
                        <Image
                            src={animatedFlagUrl}
                            alt=""
                            width={400}
                            height={300}
                            className="w-full h-full object-cover scale-125"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                    {/* EU Icon */}
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#003399] border-2 border-[#FFCC00]/50 flex items-center justify-center overflow-hidden shadow-lg shadow-blue-900/30">
                        <Image
                            src={flagSvgUrl}
                            alt="EU Flag"
                            width={48}
                            height={48}
                            className="w-10 h-10 object-contain"
                            unoptimized
                        />
                    </div>

                    <h3
                        className="text-lg sm:text-xl text-white mb-3"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                    >
                        {title}
                    </h3>

                    <p
                        className="text-sm text-zinc-400 max-w-md mx-auto"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    >
                        {subtitle}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
