import { ReactNode, useState, useEffect, useRef, MouseEvent, TouchEvent } from 'react';

interface OverlayProps {
    mousePos: { x: number; y: number };
    isTouch: boolean;
}

export function GlassCardOverlay({ mousePos, isTouch }: OverlayProps) {
    return (
        <>
            {/* Reflection band */}
            <div
                className="absolute inset-x-0 top-0 h-[18%] rounded-t-3xl reflection-gradient pointer-events-none z-0"
                aria-hidden="true"
            />

            {/* Inner highlight stroke */}
            <div
                className="absolute top-[1px] left-6 right-6 h-px highlight-stroke pointer-events-none z-10"
                aria-hidden="true"
            />

            {/* Mouse reflection overlay */}
            {!isTouch && (
                <div
                    className="pointer-events-none absolute w-48 h-48 rounded-full bg-white/10 opacity-30 mix-blend-screen"
                    style={{ left: mousePos.x, top: mousePos.y, filter: 'blur(30px)' }}
                />
            )}
        </>
    );
}
