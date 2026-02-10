"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, Users, Zap, ChevronDown, ChevronUp, Mail, Music, Radio } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ProgramModule {
    title: string;
    content: string;
}

interface SubProgram {
    id: string; // Kept for logic, not displayed
    title: string;
    features: string[];
    description: string;
    modules: ProgramModule[];
    icon: React.ReactNode;
    color: string; // Tailwind class for text/bg accents
    placeholderIcon?: React.ReactNode;
    placeholderText?: string;
}

interface ProgramGroup {
    id: string; // Kept for logic, not displayed
    title: string;
    keywords: string[];
    description: string;
    subPrograms: SubProgram[];
}

interface SimpleProgram {
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
}

const mainProgramGroup: ProgramGroup = {
    id: "Program 1",
    title: "공감과 상호이해 기반 교육 프로그램",
    keywords: ["#공감", "#소통", "#상호이해", "#세대갈등"],
    description: "공감과 상호이해를 바탕으로 조직 내 갈등을 해소하고 구성원 간의 연결을 돕는 '더 비저니스트'의 대표 교육 라인업입니다.",
    subPrograms: [
        {
            id: "Program 1-1",
            title: "나미야 잡화점의 기적",
            features: ["#힐링", "#공감", "#소통", "#스토리텔링"],
            description: "역지사지의 마음으로 동료의 고민을 나누고, 편지를 통해 유쾌한 울림을 느끼는 소통 과정",
            icon: <Mail className="w-6 h-6 text-white" />,
            color: "bg-[#1A2B48]", // Navy for icon bg
            placeholderIcon: <Mail className="w-10 h-10 text-[#1A2B48] opacity-80" />,
            placeholderText: "따뜻한 우체통",
            modules: [
                {
                    title: "M1. 공감이 있는 나미야 잡화점",
                    content: "과정 이해, 공감의 개념 인식, 팀별 '공감주인공' 선정"
                },
                {
                    title: "M2. 또 다른 내가 되어 보기",
                    content: "캐릭터 프로파일링을 통한 공감지도 작성, 주인공의 입장에서 6가지 질문에 답하기"
                },
                {
                    title: "M3. 우리의 사연에 공감해요",
                    content: "갤러리워크 방식의 전체 공유, 고민에 대한 답장 편지 작성 및 낭독"
                }
            ]
        },
        {
            id: "Program 1-2",
            title: "소통공감, 볼륨을 높여요",
            features: ["#라디오", "#음악", "#아날로그감성", "#DJ"],
            description: "라디오와 음악을 활용한 아날로그 감성으로 서로의 이야기를 듣고 공감하는 소통 과정",
            icon: <Radio className="w-6 h-6 text-white" />,
            color: "bg-[#1A2B48]", // Unified Navy
            placeholderIcon: <Music className="w-10 h-10 text-[#1A2B48] opacity-80" />,
            placeholderText: "사연과 음악",
            modules: [
                {
                    title: "M1. 나와 우리의 플레이리스트",
                    content: "나를 표현하는 인생 곡 공유, 팀만의 유니크한 플레이리스트 선정 및 소개"
                },
                {
                    title: "M2. 디제이에게 사연을 보내요",
                    content: "동료에게 전하고 싶은 마음을 담은 사연 작성 (익명/실명), 신청곡 선정"
                },
                {
                    title: "M3. 볼륨을 높여요",
                    content: "일일 DJ의 사연 소개와 음악 감상, 공감과 지지의 메시지 나누기"
                }
            ]
        }
    ]
};

const otherPrograms: SimpleProgram[] = [
    {
        title: "창의적 혁신",
        description: "고정관념을 깨고 새로운 가치를 창출하는 창의적 사고와 혁신 문화를 조직에 심어줍니다.",
        icon: <Lightbulb className="w-8 h-8 text-white" />,
        color: "bg-[#C5A059]" // Reverted to Brand Gold
    },
    {
        title: "조직 시너지",
        description: "상호 존중과 효과적인 소통을 통해 최상의 팀워크를 발휘하는 고성능 조직을 만듭니다.",
        icon: <Users className="w-8 h-8 text-white" />,
        color: "bg-brand-dark" // Reverted to Brand Dark
    },
    {
        title: "미래 역량",
        description: "디지털 대전환 시대에 필수적인 핵심 역량을 함양하여 경쟁력 있는 인재로 거듭납니다.",
        icon: <Zap className="w-8 h-8 text-white" />,
        color: "bg-slate-700" // Reverted to Slate
    }
];

function ModuleAccordion({ modules }: { modules: ProgramModule[] }) {
    return (
        <div className="space-y-3">
            {modules.map((module, index) => (
                <div key={index} className="bg-gray-50/80 rounded-lg p-4 border border-gray-100 hover:bg-gray-50 transition-colors">
                    <h5 className="text-sm font-bold mb-1 text-[#1A2B48]">{module.title}</h5>
                    <p className="text-xs text-gray-600 leading-relaxed break-keep">{module.content}</p>
                </div>
            ))}
        </div>
    );
}

function ProgramGroupSection({ group }: { group: ProgramGroup }) {
    const [openSubProgramId, setOpenSubProgramId] = useState<string | null>(group.subPrograms[0].id);

    return (
        <div className="mb-16 border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-lg">
            {/* Group Header - Reverted to Dark Navy Block */}
            <div className="bg-[#1A2B48] p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {group.keywords.map((keyword, i) => (
                            <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-brand-gold border border-white/10">
                                {keyword}
                            </span>
                        ))}
                    </div>
                    {/* Simplified Group Title */}
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{group.title}</h3>
                    <p className="text-gray-300 max-w-3xl leading-relaxed text-sm lg:text-base opacity-90">
                        {group.description}
                    </p>
                </div>
            </div>

            {/* Sub Programs List */}
            <div className="divide-y divide-gray-100">
                {group.subPrograms.map((subProgram) => {
                    const isOpen = openSubProgramId === subProgram.id;
                    const toggleOpen = () => setOpenSubProgramId(isOpen ? null : subProgram.id);

                    return (
                        <div key={subProgram.id} className={`transition-colors duration-300 ${isOpen ? 'bg-white' : 'hover:bg-gray-50'}`}>
                            {/* Header (Clickable) */}
                            <button
                                onClick={toggleOpen}
                                className="w-full text-left p-6 lg:p-8 flex items-start gap-6 group"
                            >
                                <div className={`hidden md:flex w-12 h-12 rounded-xl ${subProgram.color} items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                                    {subProgram.icon}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        {/* High Contrast Title Box: Navy BG + White Text */}
                                        <h4 className="bg-[#1A2B48] text-white text-lg lg:text-xl font-bold px-4 py-2 rounded-lg inline-block shadow-sm">
                                            {subProgram.title}
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {subProgram.features.map((feature, i) => (
                                            <span key={i} className="text-xs text-[#1A2B48] font-medium opacity-80">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed break-keep pr-8 group-hover:text-gray-800 transition-colors">
                                        {subProgram.description}
                                    </p>
                                </div>

                                <div className="mt-2 shrink-0">
                                    {isOpen ? (
                                        <ChevronUp className="w-6 h-6 text-[#1A2B48]" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-300 group-hover:text-gray-500" />
                                    )}
                                </div>
                            </button>

                            {/* Details (Accordion Body) */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 lg:p-8 pt-0 pl-0 md:pl-[5.5rem] grid lg:grid-cols-3 gap-6">
                                    {/* Content Modules */}
                                    <div className="lg:col-span-2">
                                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-100">
                                                <span className="text-xs font-bold text-[#1A2B48] uppercase tracking-wider">Curriculum Modules</span>
                                            </div>
                                            <div className="p-4">
                                                <ModuleAccordion modules={subProgram.modules} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual / Mood Placeholder */}
                                    <div className="lg:col-span-1">
                                        <div className="h-full min-h-[200px] bg-gray-50 rounded-xl border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden group">
                                            <div className={`absolute inset-0 opacity-5 ${subProgram.color}`}></div>
                                            <div className="transform group-hover:scale-110 transition-transform duration-500">
                                                {subProgram.placeholderIcon}
                                            </div>
                                            <span className="mt-3 text-xs font-bold text-[#1A2B48] opacity-80">
                                                {subProgram.placeholderText}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default function Programs() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current!.children, {
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

                <div ref={contentRef}>
                    {/* Featured Program Group */}
                    <ProgramGroupSection group={mainProgramGroup} />

                    {/* Other Programs (Grid) */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherPrograms.map((program, index) => (
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
            </div>
        </section>
    );
}
