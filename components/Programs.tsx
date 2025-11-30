"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Users, Target, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const programs = [
    {
        title: "비전 리더십",
        description: "미래를 꿰뚫어보는 통찰력으로 조직의 변화를 주도하고 영감을 주는 리더를 양성합니다.",
        icon: <Target className="w-8 h-8 text-white" />,
        color: "bg-brand-royal"
    },
    {
        title: "창의적 혁신",
        description: "고정관념을 깨고 새로운 가치를 창출하는 창의적 사고와 혁신 문화를 조직에 심어줍니다.",
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        color: "bg-brand-gold"
    },
    {
        title: "조직 시너지",
        description: "상호 존중과 효과적인 소통을 통해 최상의 팀워크를 발휘하는 고성능 조직을 만듭니다.",
        icon: <Users className="w-8 h-8 text-white" />,
        color: "bg-brand-dark"
    },
    {
        title: "미래 역량",
        description: "디지털 대전환 시대에 필수적인 핵심 역량을 함양하여 경쟁력 있는 인재로 거듭납니다.",
        icon: <Zap className="w-8 h-8 text-white" />,
        color: "bg-slate-700"
    }
];

export default function Programs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(cardsRef.current!.children, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="programs" ref={sectionRef} className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">교육 프로그램</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto leading-loose break-keep">
                        조직의 성과를 극대화하고 지속 가능한 성장을 이끄는 체계적인 교육 솔루션을 제안합니다.
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`w-14 h-14 rounded-xl ${program.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3">{program.title}</h3>
                            <p className="text-gray-600 leading-loose text-sm break-keep">
                                {program.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
