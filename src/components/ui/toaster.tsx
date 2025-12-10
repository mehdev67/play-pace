"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
    return (
        <SonnerToaster
            position="bottom-right"
            toastOptions={{
                style: {
                    background: "rgba(0, 0, 0, 0.8)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "white",
                    backdropFilter: "blur(12px)",
                },
                className: "font-sans",
            }}
            richColors
        />
    );
}
