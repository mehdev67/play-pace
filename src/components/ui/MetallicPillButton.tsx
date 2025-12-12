'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface MetallicPillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    glowColor?: string;
    noGlow?: boolean;
}

/**
 * MetallicPillButton - A premium metallic pill-shaped button
 * 
 * Features:
 * - 3D metallic surface with realistic gradients
 * - Hover effects with enhanced shadows
 * - Click/active effect with pressed state
 * - Living, breathing glow effect behind the button (can be disabled with noGlow)
 * - Responsive sizing options
 * - Supports ref forwarding
 */
const MetallicPillButton = React.forwardRef<HTMLButtonElement, MetallicPillButtonProps>(
    function MetallicPillButton(
        { children, className, size = 'md', fullWidth = false, glowColor = 'rgba(255,255,255,0.8)', noGlow = false, ...props },
        ref
    ) {
        const sizeClasses = {
            sm: 'metallic-pill--sm',
            md: '',
            lg: 'metallic-pill--lg',
        };

        return (
            <div className={cn('metallic-pill-wrapper', fullWidth && 'w-full')}>
                {/* Living glow effect - only show if noGlow is false */}
                {!noGlow && (
                    <div
                        className="metallic-pill-glow"
                        style={{ '--glow-color': glowColor } as React.CSSProperties}
                    />
                )}
                <button
                    ref={ref}
                    className={cn(
                        'metallic-pill',
                        sizeClasses[size],
                        fullWidth && 'metallic-pill--full-width',
                        className
                    )}
                    {...props}
                >
                    <span className="metallic-pill__text">{children}</span>
                </button>
            </div>
        );
    }
);

export { MetallicPillButton };
export default MetallicPillButton;
