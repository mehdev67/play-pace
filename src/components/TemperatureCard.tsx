"use client";

import { useState } from "react";
import { GlassCard, GlassButton } from "react-glass-ui";
import { ThermometerSnowflake, ThermometerSun } from "lucide-react";

interface TemperatureCardProps {
    initialTemperatureCelsius: number;
}

export function TemperatureCard({ initialTemperatureCelsius }: TemperatureCardProps) {
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;
    const fahrenheitToCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;

    const currentTemperature = isFahrenheit
        ? celsiusToFahrenheit(initialTemperatureCelsius)
        : initialTemperatureCelsius;
    const unit = isFahrenheit ? "°F" : "°C";

    const toggleUnit = () => {
        setIsFahrenheit(!isFahrenheit);
    };

    return (
        <GlassCard
            width={350}
            blur={8}
            distortion={15}
            borderRadius={24}
            borderOpacity={0.3}
            backgroundColor="#6effc5"
            backgroundOpacity={0.1}
            innerLightBlur={20}
            innerLightColor="#8656ff"
            onHoverScale={1.02}
            flexibility={0.5}
            className="p-8 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#6effc5]/20 text-[#6effc5] text-xs font-semibold mb-4">
                Weather
            </span>
            <h3 className="text-4xl font-bold text-white mb-3">
                {currentTemperature.toFixed(1)}{unit}
            </h3>
            <p className="text-zinc-400 mb-6">
                {isFahrenheit
                    ? `Equivalent to ${fahrenheitToCelsius(currentTemperature).toFixed(1)}°C`
                    : `Equivalent to ${celsiusToFahrenheit(currentTemperature).toFixed(1)}°F`}
            </p>
            <GlassButton onClick={toggleUnit} className="flex items-center gap-2">
                {isFahrenheit ? <ThermometerSnowflake size={16} /> : <ThermometerSun size={16} />}
                {isFahrenheit ? "Switch to Celsius" : "Switch to Fahrenheit"}
            </GlassButton>
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-zinc-500">
                <span>Local Temperature</span>
                {isFahrenheit ? <ThermometerSun size={16} /> : <ThermometerSnowflake size={16} />}
            </div>
        </GlassCard>
    );
}
