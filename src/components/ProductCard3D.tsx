'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';
import { CheckCircle } from 'lucide-react';
import { MetallicPillButton } from '@/components/ui/MetallicPillButton';

interface ProductCard3DProps {
    id: string;
    icon: string;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    gradient: string;
    textColor: string;
    index: number;
}

export function ProductCard3D({
    id,
    icon,
    title,
    tagline,
    description,
    features,
    gradient,
    textColor,
    index,
}: ProductCard3DProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for 3D effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { stiffness: 150, damping: 20 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

    // Glow position
    const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
    const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative pb-8"
            style={{ perspective: 1000 }}
        >
            <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                }}
                className="relative group cursor-pointer"
            >
                {/* Glowing background effect */}
                <motion.div
                    className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500`}
                    style={{
                        background: isHovered
                            ? `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(255,255,255,0.3), transparent 50%)`
                            : undefined,
                    }}
                />

                {/* Card */}
                <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-2xl shadow-black/10 pb-8">
                    {/* Holographic shimmer overlay */}
                    <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                            background: `linear-gradient(
                                105deg,
                                transparent 40%,
                                rgba(255,255,255,0.5) 45%,
                                rgba(255,255,255,0.8) 50%,
                                rgba(255,255,255,0.5) 55%,
                                transparent 60%
                            )`,
                            backgroundSize: '200% 200%',
                            backgroundPosition: isHovered ? '100% 0%' : '0% 0%',
                            transition: 'background-position 0.6s ease',
                        }}
                    />

                    {/* Floating Icon */}
                    <motion.div
                        className="relative z-10 flex justify-center pt-10 pb-6"
                        style={{
                            transform: isHovered ? 'translateZ(60px)' : 'translateZ(0px)',
                            transition: 'transform 0.3s ease',
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotateY: isHovered ? 360 : 0,
                            }}
                            transition={{
                                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                                rotateY: { duration: 0.8, ease: 'easeOut' },
                            }}
                            className="relative"
                        >
                            <NextImage
                                src={icon}
                                alt={title}
                                width={140}
                                height={140}
                                priority
                                className="w-28 h-28 object-contain drop-shadow-2xl"
                            />
                            {/* Icon glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 blur-xl rounded-full scale-150`} />
                        </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10 px-8 text-center">
                        <motion.h3
                            className="text-2xl font-bold text-zinc-900 mb-2"
                            style={{
                                transform: isHovered ? 'translateZ(40px)' : 'translateZ(0px)',
                                transition: 'transform 0.3s ease',
                            }}
                        >
                            {title}
                        </motion.h3>
                        <p className={`${textColor} font-semibold mb-4 uppercase tracking-wider text-sm`}>
                            {tagline}
                        </p>
                        <p className="text-zinc-600 mb-6 leading-relaxed text-sm">
                            {description}
                        </p>

                        {/* Features - Compact */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {features.slice(0, 4).map((feature) => (
                                <span
                                    key={feature}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100/80 text-zinc-600 text-xs font-medium"
                                >
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CTA Button - Floating below card, overlapping edge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-30 w-[85%]">
                <Link href={`/products/${id}`} className="block w-full">
                    <MetallicPillButton fullWidth>
                        Get Started
                    </MetallicPillButton>
                </Link>
            </div>
        </motion.div>
    );
}

export default ProductCard3D;
