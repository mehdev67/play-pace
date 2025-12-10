"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { GlassCardOverlay } from './GlassCard/GlassCardOverlay';
import { GlassCardRipple } from './GlassCard/GlassCardRipple';

interface GlassCardProps {
    label: string;
    title: string;
    description: string;
    ctaText: string;
    onCtaClick?: () => void;
    href?: string;
    metadata?: {
        left: ReactNode;
        right: ReactNode;
    };
    className?: string;
}

export function GlassCard({
    label,
    title,
    description,
    ctaText,
    onCtaClick,
    href,
    metadata,
    className = '',
}: GlassCardProps) {
    const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
    const [isTouch, setIsTouch] = useState(false);
    const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
    const rippleId = useRef(0);

    // Detect first touch to disable mouse reflection on mobile
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handler = () => setIsTouch(true);
            window.addEventListener('touchstart', handler, { once: true });
            return () => window.removeEventListener('touchstart', handler);
        }
    }, []);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left - 100,
            y: e.clientY - rect.top - 100,
        });
    };

    const handleMouseLeave = () => {
        setMousePos({ x: -200, y: -200 });
    };

    const handleButtonClick = (e: MouseEvent<HTMLButtonElement> | TouchEvent<HTMLButtonElement>) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();
        const x = ('clientX' in e ? e.clientX : e.touches[0].clientX) - rect.left - 10;
        const y = ('clientY' in e ? e.clientY : e.touches[0].clientY) - rect.top - 10;
        const newRipple = { id: rippleId.current++, x, y };
        setRipples((prev) => [...prev, newRipple]);
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);
        if (onCtaClick) onCtaClick();
    };

    const CardWrapper = href ? motion.a : motion.article;
    const cardProps = href ? { href } : {};

    return (
        <CardWrapper
            {...cardProps}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className={`relative block w-[380px] max-w-full min-w-[320px] px-8 py-7 rounded-3xl border border-white/[0.22] overflow-hidden isolate cursor-pointer ${className}`}
            style={{
                background: `linear-gradient(
          168deg,
          rgba(255,255,255,0.18) 0%,
          rgba(255,255,255,0.09) 42%,
          rgba(255,255,255,0.04) 100%
        )`,
                backdropFilter: 'blur(28px) saturate(1.6)',
                WebkitBackdropFilter: 'blur(28px) saturate(1.6)',
                boxShadow: `0 1px 3px rgba(0,0,0,0.06),0 2px 6px rgba(0,0,0,0.04),0 12px 28px -4px rgba(0,0,0,0.14)`,
            }}
        >
            {/* Interactive area for mouse effects */}
            <div
                onMouseMove={!isTouch ? handleMouseMove : undefined}
                onMouseLeave={!isTouch ? handleMouseLeave : undefined}
                className="relative"
            >
                <GlassCardOverlay mousePos={mousePos} isTouch={isTouch} />
                <div className="relative z-10 flex flex-col">
                    {/* Label pill */}
                    <span className="inline-flex items-center self-start h-[26px] px-3.5 rounded-full text-[11px] font-semibold uppercase tracking-wide text-purple-200/95 bg-gradient-to-br from-purple-500/[0.28] to-blue-400/[0.22] border border-purple-400/[0.32] shadow-[inset_0_1px_1px_rgba(255,255,255,0.16)]">
                        {label}
                    </span>

                    {/* Title */}
                    <h3 className="mt-[18px] text-2xl font-semibold leading-tight text-white/[0.96] tracking-tight">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-[15px] font-normal leading-relaxed text-white/[0.62] max-w-[92%]">
                        {description}
                    </p>

                    {/* CTA button with ripple effect */}
                    <button
                        type="button"
                        onClick={handleButtonClick}
                        className="mt-6 self-start relative overflow-hidden h-11 px-7 rounded-xl bg-cta hover:bg-cta-hover text-sm font-semibold text-white shadow-cta transition-all duration-200 ease-out hover:scale-[1.015] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
                    >
                        {ctaText}
                        <GlassCardRipple ripples={ripples} />
                    </button>

                    {/* Metadata row */}
                    {metadata && (
                        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-normal text-white/[0.42]">
                            <span>{metadata.left}</span>
                            <span>{metadata.right}</span>
                        </div>
                    )}
                </div>
            </div>
        </CardWrapper>
    );
}

export default GlassCard;
