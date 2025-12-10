"use client";

import { useEffect, useRef } from "react";

export default function OceanBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        const particles: Particle[] = [];
        const waves: Wave[] = [];

        // Kattegat marine color palette - Ultra deep
        const colors = {
            deepOcean: "#010409",     // Almost black navy
            darkNavy: "#030712",      // Very dark marine blue
            marineTeal: "#082f49",    // Deep teal
            shimmer: "#38bdf8",       // Light cyan shimmer
            sparkle: "#7dd3fc",       // Bright sparkle
            foam: "#e0f2fe",          // White foam
        };

        // Resize canvas
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Particle class for sparkles
        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            color: string;
            pulseOffset: number;
            canvasWidth: number;
            canvasHeight: number;

            constructor(canvasWidth: number, canvasHeight: number) {
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;
                this.x = Math.random() * canvasWidth;
                this.y = Math.random() * canvasHeight;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.3;
                this.speedY = (Math.random() - 0.5) * 0.2;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.color = Math.random() > 0.7 ? colors.foam :
                    Math.random() > 0.4 ? colors.sparkle : colors.shimmer;
                this.pulseOffset = Math.random() * Math.PI * 2;
            }

            update(time: number, canvasWidth: number, canvasHeight: number) {
                this.canvasWidth = canvasWidth;
                this.canvasHeight = canvasHeight;
                this.x += this.speedX;
                this.y += this.speedY;

                // Gentle wave motion
                this.x += Math.sin(time * 0.001 + this.y * 0.01) * 0.2;
                this.y += Math.cos(time * 0.0008 + this.x * 0.01) * 0.15;

                // Sparkle effect
                this.opacity = 0.3 + Math.sin(time * 0.003 + this.pulseOffset) * 0.3;

                // Wrap around screen
                if (this.x < 0) this.x = this.canvasWidth;
                if (this.x > this.canvasWidth) this.x = 0;
                if (this.y < 0) this.y = this.canvasHeight;
                if (this.y > this.canvasHeight) this.y = 0;
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.fillStyle = this.color;
                context.globalAlpha = this.opacity;
                context.fill();

                // Add glow effect
                context.shadowBlur = 8;
                context.shadowColor = this.color;
                context.fill();
                context.shadowBlur = 0;
                context.globalAlpha = 1;
            }
        }

        // Wave class for undulating water effect
        class Wave {
            amplitude: number;
            wavelength: number;
            speed: number;
            offset: number;
            y: number;
            opacity: number;

            constructor(y: number, amplitude: number, wavelength: number, speed: number) {
                this.y = y;
                this.amplitude = amplitude;
                this.wavelength = wavelength;
                this.speed = speed;
                this.offset = Math.random() * Math.PI * 2;
                this.opacity = 0.03 + Math.random() * 0.05;
            }

            draw(context: CanvasRenderingContext2D, time: number, canvasWidth: number, canvasHeight: number) {
                context.beginPath();
                context.moveTo(0, canvasHeight);

                for (let x = 0; x <= canvasWidth; x += 5) {
                    const waveY = this.y +
                        Math.sin(x / this.wavelength + time * this.speed + this.offset) * this.amplitude +
                        Math.sin(x / (this.wavelength * 0.5) + time * this.speed * 1.3) * (this.amplitude * 0.3);
                    context.lineTo(x, waveY);
                }

                context.lineTo(canvasWidth, canvasHeight);
                context.closePath();

                const gradient = context.createLinearGradient(0, this.y - this.amplitude, 0, canvasHeight);
                gradient.addColorStop(0, `rgba(8, 47, 73, ${this.opacity})`);
                gradient.addColorStop(0.5, `rgba(3, 7, 18, ${this.opacity * 0.6})`);
                gradient.addColorStop(1, "transparent");

                context.fillStyle = gradient;
                context.fill();
            }
        }

        // Initialize particles
        const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }

        // Initialize waves
        for (let i = 0; i < 5; i++) {
            waves.push(new Wave(
                canvas.height * (0.3 + i * 0.15),
                20 + i * 10,
                200 + i * 50,
                0.0005 + i * 0.0002
            ));
        }

        // Animation loop
        const animate = (time: number) => {
            const currentCanvas = canvasRef.current;
            if (!currentCanvas) return;

            const currentCtx = currentCanvas.getContext("2d");
            if (!currentCtx) return;

            const width = currentCanvas.width;
            const height = currentCanvas.height;

            // Create gradient background
            const bgGradient = currentCtx.createRadialGradient(
                width * 0.5, height * 0.3, 0,
                width * 0.5, height * 0.5, width * 0.8
            );
            bgGradient.addColorStop(0, colors.darkNavy);
            bgGradient.addColorStop(0.5, colors.deepOcean);
            bgGradient.addColorStop(1, "#010409");

            currentCtx.fillStyle = bgGradient;
            currentCtx.fillRect(0, 0, width, height);

            // Draw caustics light effect
            for (let i = 0; i < 3; i++) {
                const x = width * (0.3 + i * 0.2) + Math.sin(time * 0.0003 + i) * 100;
                const y = height * 0.2 + Math.cos(time * 0.0004 + i * 2) * 50;

                const causticGradient = currentCtx.createRadialGradient(x, y, 0, x, y, 300 + i * 100);
                causticGradient.addColorStop(0, `rgba(56, 189, 248, ${0.06 - i * 0.015})`);
                causticGradient.addColorStop(0.5, `rgba(8, 47, 73, ${0.03 - i * 0.008})`);
                causticGradient.addColorStop(1, "transparent");

                currentCtx.fillStyle = causticGradient;
                currentCtx.fillRect(0, 0, width, height);
            }

            // Draw waves
            waves.forEach(wave => wave.draw(currentCtx, time, width, height));

            // Update and draw particles
            particles.forEach(particle => {
                particle.update(time, width, height);
                particle.draw(currentCtx);
            });

            // Add shimmer lines (like light refracting through water)
            for (let i = 0; i < 8; i++) {
                const lineX = (time * 0.02 + i * width / 8) % width;
                const lineY1 = Math.sin(time * 0.001 + i) * 50 + height * 0.1;
                const lineY2 = lineY1 + height * 0.3;

                const shimmerGradient = currentCtx.createLinearGradient(lineX, lineY1, lineX, lineY2);
                shimmerGradient.addColorStop(0, "transparent");
                shimmerGradient.addColorStop(0.5, `rgba(125, 211, 252, ${0.05 + Math.sin(time * 0.002 + i) * 0.03})`);
                shimmerGradient.addColorStop(1, "transparent");

                currentCtx.strokeStyle = shimmerGradient;
                currentCtx.lineWidth = 1;
                currentCtx.beginPath();
                currentCtx.moveTo(lineX, lineY1);
                currentCtx.lineTo(lineX + Math.sin(time * 0.001 + i * 0.5) * 30, lineY2);
                currentCtx.stroke();
            }

            animationId = requestAnimationFrame(animate);
        };

        animate(0);

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: "#010409" }}
        />
    );
}
