"use client";

import { Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-royal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6 break-keep">조직의 변화를 시작하세요</h2>
                        <p className="text-gray-300 text-lg mb-8 leading-loose break-keep">
                            더비저니스트와 함께라면 가능합니다. 귀사의 비전과 목표에 맞춘 최적의 교육 프로그램을 제안해 드립니다. 지금 바로 문의하세요.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Send className="w-5 h-5 text-brand-gold" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-medium text-lg">contact@thevisionist.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">이름</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-white/20"
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300">회사명</label>
                                    <input
                                        type="text"
                                        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-white/20"
                                        placeholder="(주)더비저니스트"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">이메일</label>
                                <input
                                    type="email"
                                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-white/20"
                                    placeholder="example@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">문의 내용</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold focus:outline-none transition-colors text-white placeholder-white/20 resize-none"
                                    placeholder="교육 일정, 인원 등 궁금하신 점을 남겨주세요."
                                ></textarea>
                            </div>

                            <button className="w-full py-4 rounded-xl bg-brand-gold hover:bg-white hover:text-brand-dark text-white font-bold transition-all shadow-lg shadow-brand-gold/20">
                                문의하기
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
