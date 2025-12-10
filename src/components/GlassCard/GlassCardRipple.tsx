import { useEffect } from 'react';

interface RippleProps {
    ripples: Array<{ id: number; x: number; y: number }>;
}

export function GlassCardRipple({ ripples }: RippleProps) {
    // Cleanup handled in parent; this component only renders
    return (
        <>
            {ripples.map((r) => (
                <span
                    key={r.id}
                    className="absolute rounded-full bg-white/30 pointer-events-none"
                    style={{
                        left: r.x,
                        top: r.y,
                        width: '20px',
                        height: '20px',
                        animation: 'ripple 0.6s ease-out',
                    }}
                />
            ))}
        </>
    );
}
