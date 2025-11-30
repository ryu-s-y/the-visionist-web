"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const clients = [
    "Samsung", "LG", "SK", "Hyundai", "Lotte", "POSCO", "Hanwha", "GS", "Kakao", "Naver"
];

export default function ClientLogos() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const firstTextRef = useRef<HTMLDivElement>(null);
    const secondTextRef = useRef<HTMLDivElement>(null);

    let xPercent = 0;
    let direction = -1;

    useEffect(() => {
        let animationId: number;
        const animation = () => {
            if (xPercent <= -100) {
                xPercent = 0;
            }
            if (xPercent > 0) {
                xPercent = -100;
            }

            if (firstTextRef.current && secondTextRef.current) {
                gsap.set(firstTextRef.current, { xPercent: xPercent });
                gsap.set(secondTextRef.current, { xPercent: xPercent });
            }

            xPercent += 0.05 * direction;
            animationId = requestAnimationFrame(animation);
        }

        animationId = requestAnimationFrame(animation);
        return () => cancelAnimationFrame(animationId);
    }, [direction]);

    return (
        <section id="clients" className="py-16 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">주요 고객사</p>
            </div>

            <div ref={sliderRef} className="relative flex whitespace-nowrap">
                <div ref={firstTextRef} className="flex items-center gap-16 px-8">
                    {clients.map((client, index) => (
                        <span key={index} className="text-3xl font-bold text-gray-300 hover:text-brand-primary transition-colors cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
                <div ref={secondTextRef} className="flex items-center gap-16 px-8 absolute left-full top-0">
                    {clients.map((client, index) => (
                        <span key={`dup-${index}`} className="text-3xl font-bold text-gray-300 hover:text-brand-primary transition-colors cursor-default">
                            {client}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
