'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface GlowBadgeProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    glowColor?: string;
}

/**
 * GlowBadge - A pill-shaped badge with living glow effect
 */
export function GlowBadge({
    children,
    icon,
    className,
    glowColor = 'rgba(255, 255, 255, 0.8)',
}: GlowBadgeProps) {
    return (
        <div className="glow-badge-wrapper inline-flex">
            {/* Living glow */}
            <div
                className="glow-badge-glow"
                style={{ '--glow-color': glowColor } as React.CSSProperties}
            />
            <div
                className={cn(
                    'glow-badge',
                    className
                )}
            >
                {icon && <span className="glow-badge__icon">{icon}</span>}
                <span className="glow-badge__text">{children}</span>
            </div>
        </div>
    );
}

export default GlowBadge;
