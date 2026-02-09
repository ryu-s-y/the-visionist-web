"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.from(textRef.current!.children, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
            })
                .from(imageRef.current, {
                    x: 50,
                    opacity: 0,
                    duration: 1,
                }, "-=0.5");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-brand-royal/10">
            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div ref={textRef} className="flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-royal/10 border border-brand-royal/20 w-fit text-brand-royal font-medium text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-royal opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-royal"></span>
                        </span>
                        Premium Corporate Training
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-bold text-brand-dark leading-[1.3] tracking-tight break-keep">
                        미래를 이끄는 리더십, <br />
                        <span className="text-brand-royal">더비저니스트가 함께합니다.</span>
                    </h1>

                    <p className="text-base lg:text-lg text-gray-600 max-w-xl leading-loose break-keep">
                        조직의 잠재력을 깨우는 비전 리더십과 혁신적인 사고.
                        더비저니스트는 미래 리더를 위한 최상의 기업 교육 솔루션을 제공합니다.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <Link
                            href="/program"
                            className="px-10 py-4 rounded-full bg-brand-royal text-white font-semibold hover:bg-brand-dark transition-all hover:scale-105 shadow-lg shadow-brand-royal/20"
                        >
                            프로그램 보기
                        </Link>
                        <Link
                            href="/contact"
                            className="px-10 py-4 rounded-full bg-white text-brand-dark border border-gray-200 font-semibold hover:bg-gray-50 hover:border-brand-gold transition-all"
                        >
                            교육 문의
                        </Link>
                    </div>
                </div>

                {/* Image/Visual */}
                <div ref={imageRef} className="relative h-[500px] w-full hidden lg:block">
                    <div className="absolute inset-0 bg-brand-royal/5 rounded-[2rem] transform rotate-3"></div>
                    <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="w-full h-full bg-gray-50 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-royal/10 to-transparent"></div>
                            <span className="text-brand-royal/20 text-8xl font-bold">Vision</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
