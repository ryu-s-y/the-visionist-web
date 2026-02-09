"use client";

import Image from "next/image";

export default function Instructor() {
    return (
        <section id="instructor" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        <Image
                            src="/instructor_profile_white.png"
                            alt="김은경 대표"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="space-y-8">
                        <div className="inline-block px-5 py-2 bg-brand-gold/10 text-brand-gold rounded-full font-semibold text-sm border border-brand-gold/20">
                            대표 강사 소개
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark leading-tight break-keep">
                            변화를 이끄는 비저너리,<br />
                            <span className="text-brand-royal">김은경 대표</span>
                        </h2>
                        <p className="text-base text-gray-600 leading-loose break-keep">
                            지난 20년간 국내 유수의 대기업과 공공기관에서 리더십과 조직문화 혁신을 주도해왔습니다.
                            조직의 복잡성 속에서 성과X성장X즐거움의 방법을 실용적으로 연구합니다.
                            .
                        </p>

                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-gold shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed"><strong>現</strong> The Visionist(더 비저니스트) 대표</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-gold shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed"><strong>現</strong> 한국생산성본부 전문교수</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-gold shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed"><strong>前</strong> 행안부 정부혁신 컨설팅위원 (조직문화분과)</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-gold shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed"><strong>前</strong> 명지전문대학 객원조교수</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-gold shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed"><strong>前</strong> 현대자동차그룹 조직개발 사외 Facilitator</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2.5 rounded-full bg-brand-gold shrink-0"></div>
                                <p className="text-gray-700 leading-relaxed"><strong>前</strong> SK텔레콤 서비스에이스 교육사업본부 팀장</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <span className="text-brand-dark font-bold text-lg block mb-4">주요 강의 분야</span>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-brand-royal hover:text-brand-royal transition-colors">리더십 코칭</span>
                                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-brand-royal hover:text-brand-royal transition-colors">조직 활성화</span>
                                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-brand-royal hover:text-brand-royal transition-colors">갈등 관리</span>
                                <span className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-brand-royal hover:text-brand-royal transition-colors">비전 수립</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
