"use client";

import React from 'react';

export interface GlitchProps {
    children: React.ReactNode;
    isActive?: boolean;
    variant?: 'build' | 'develop' | 'innovate';
}

export function Glitch({
    children,
    isActive = false,
    variant = 'build',
}: GlitchProps) {
    if (!isActive) {
        return <span className="inline-block">{children}</span>;
    }

    const variantClasses = {
        build: {
            main: 'animate-glitch-build',
            cyan: 'animate-glitch-build-cyan',
            red: 'animate-glitch-build-red',
            slice: 'animate-glitch-build-slice',
        },
        develop: {
            main: 'animate-glitch-develop',
            cyan: 'animate-glitch-develop-cyan',
            red: 'animate-glitch-develop-red',
            slice: 'animate-glitch-develop-slice',
        },
        innovate: {
            main: 'animate-glitch-innovate',
            cyan: 'animate-glitch-innovate-cyan',
            red: 'animate-glitch-innovate-red',
            slice: 'animate-glitch-innovate-slice',
        },
    };

    const classes = variantClasses[variant];

    return (
        <div className="relative inline-block glitch-container">
            {/* Scanlines overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-20 opacity-40"
                style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.4) 2px, rgba(0,0,0,0.4) 4px)',
                }}
            />

            {/* Noise overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-20 opacity-20 animate-noise"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                }}
            />

            {/* Main text */}
            <span className={`relative z-10 inline-block ${classes.main}`}>{children}</span>

            {/* Cyan ghost - top slice */}
            <span
                className={`absolute top-0 left-0 w-full h-full z-0 ${classes.cyan}`}
                style={{
                    color: '#00ffff',
                    mixBlendMode: 'screen',
                }}
                aria-hidden="true"
            >
                {children}
            </span>

            {/* Red ghost - bottom slice */}
            <span
                className={`absolute top-0 left-0 w-full h-full z-0 ${classes.red}`}
                style={{
                    color: '#ff0050',
                    mixBlendMode: 'screen',
                }}
                aria-hidden="true"
            >
                {children}
            </span>

            {/* Middle glitch slice */}
            <span
                className={`absolute top-0 left-0 w-full h-full z-5 ${classes.slice}`}
                style={{
                    clipPath: 'polygon(0 35%, 100% 35%, 100% 65%, 0 65%)',
                }}
                aria-hidden="true"
            >
                {children}
            </span>

            {/* Extra slice for more chaos */}
            <span
                className={`absolute top-0 left-0 w-full h-full z-3 opacity-60 ${classes.slice}`}
                style={{
                    clipPath: 'polygon(0 20%, 100% 20%, 100% 30%, 0 30%)',
                    color: '#ff00ff',
                    mixBlendMode: 'screen',
                }}
                aria-hidden="true"
            >
                {children}
            </span>
        </div>
    );
}

export default Glitch;
