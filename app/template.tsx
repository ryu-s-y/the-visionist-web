"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
    const el = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(el.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
    }, []);

    return <div ref={el}>{children}</div>;
}
