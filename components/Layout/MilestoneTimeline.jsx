"use client"

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MilestoneTimeline = ({ title, milestones }) => {
    const containerRef = useRef(null);
    const [dims, setDims] = useState({
        viewportW: 0,
        viewportH: 0,
        contentW: 0,
        containerH: 0,
    });

    useEffect(() => {
        const recalc = () => {
            const viewportW = window.innerWidth;
            const viewportH = window.innerHeight;

            const cardW = viewportW < 768 ? 320 : 420;
            const gap = viewportW < 768 ? 72 : 120;
            const startPad = viewportW < 768 ? 96 : 160;
            const endPad = Math.max(viewportW * 0.6, 360);

            const contentW = startPad + milestones.length * (cardW + gap) + endPad;
            const maxX = Math.max(0, contentW - viewportW);
            const containerH = maxX + viewportH;

            setDims({ viewportW, viewportH, contentW, containerH });
        };

        recalc();
        window.addEventListener("resize", recalc);
        return () => window.removeEventListener("resize", recalc);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const maxX = Math.max(0, dims.contentW - dims.viewportW);
    const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

    // Line draw progress synced to scroll
    const lineProgress = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

    const {
        cardW,
        gap,
        startPad,
        endPad,
        centerY,
        dotXs,
        dotYs,
        pathD,
        connectorH,
    } = useMemo(() => {
        const cardW = dims.viewportW < 768 ? 320 : 420;
        const gap = dims.viewportW < 768 ? 72 : 120;
        const startPad = dims.viewportW < 768 ? 96 : 160;
        const endPad = Math.max(dims.viewportW * 0.6, 360);

        const centerY = 400;
        // More dramatic vertical wave amplitude
        const waveAmplitude = 140;
        const connectorH = 100;

        const dotXs = milestones.map((_, i) => startPad + i * (cardW + gap) + 32);
        const dotYs = milestones.map((_, i) =>
            i % 2 === 0 ? centerY + waveAmplitude : centerY - waveAmplitude
        );

        let pathD = "";
        if (dotXs.length > 0) {
            // Start off-screen left at the first dot's Y
            pathD = `M ${dotXs[0] - 200} ${dotYs[0]}`;
            pathD += ` L ${dotXs[0]} ${dotYs[0]}`;

            for (let i = 1; i < dotXs.length; i++) {
                const px = dotXs[i - 1];
                const py = dotYs[i - 1];
                const cx = dotXs[i];
                const cy = dotYs[i];

                // S-curve with control points pulling the curve up/down dramatically
                const cp1x = px + (cx - px) * 0.5;
                const cp1y = py;
                const cp2x = px + (cx - px) * 0.5;
                const cp2y = cy;

                pathD += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${cx} ${cy}`;
            }

            // Extend off-screen right
            pathD += ` L ${dotXs[dotXs.length - 1] + 300} ${dotYs[dotYs.length - 1]}`;
        }

        return {
            cardW,
            gap,
            startPad,
            endPad,
            centerY,
            dotXs,
            dotYs,
            pathD,
            connectorH,
        };
    }, [dims.viewportW]);

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (progress) => {
            const index = Math.floor(progress * milestones.length);
            setActiveIndex(Math.min(Math.max(0, index), milestones.length - 1));
        });
        return unsubscribe;
    }, [scrollYProgress]);

    const getCardRevealThresholds = (index) => {
        const cardPosition = startPad + index * (cardW + gap);
        const revealPoint = cardPosition / (dims.contentW - dims.viewportW / 2);
        return Math.max(0, Math.min(0.95, revealPoint * 0.8));
    };

    return (
        <div
            ref={containerRef}
            id="section-milestone"
            className="relative bg-white"
            style={{ height: dims.containerH > 0 ? dims.containerH : "350vh" }}
        >
            <div className="sticky top-8 h-screen overflow-hidden">
                <div className="absolute top-16 left-8 right-8 z-20">
                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground text-center">
                        {title}
                    </h2>
                </div>
                {/* Track */}
                <motion.div
                    className="absolute top-8 left-0 h-full will-change-transform"
                    style={{ x, width: dims.contentW || "auto" }}
                >
                    {/* Line layer */}
                    <svg
                        className="absolute inset-y-0 left-0 w-full pointer-events-none"
                        viewBox={`0 0 ${dims.contentW || 1} 800`}
                        preserveAspectRatio="xMinYMid slice"
                        aria-hidden="true"
                    >
                        <defs>
                            <linearGradient id="timelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#79c4e7 / 0)" />
                                <stop offset="5%" stopColor="#79c4e7 / 1)" />
                                <stop offset="95%" stopColor="#79c4e7 / 1)" />
                                <stop offset="100%" stopColor="#79c4e7 / 0)" />
                            </linearGradient>
                        </defs>

                        {/* Single solid line that draws as you scroll */}
                        <motion.path
                            d={pathD}
                            fill="none"
                            stroke="#79c4e7"
                            strokeWidth={3}
                            strokeLinecap="round"
                            style={{ pathLength: lineProgress }}
                        />

                        {/* Dots */}
                        {dotXs.map((dotX, i) => {
                            // Show dot when scroll reaches its position
                            const dotThreshold = (i + 0.5) / milestones.length;
                            return (
                                <motion.g
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    style={{
                                        opacity: useTransform(
                                            scrollYProgress,
                                            [dotThreshold - 0.05, dotThreshold],
                                            [0, 1]
                                        ),
                                        scale: useTransform(
                                            scrollYProgress,
                                            [dotThreshold - 0.05, dotThreshold],
                                            [0.5, 1]
                                        ),
                                    }}
                                >
                                    <circle
                                        cx={dotX}
                                        cy={dotYs[i]}
                                        r={10}
                                        fill="#79c4e7"
                                    />
                                    <circle
                                        cx={dotX}
                                        cy={dotYs[i]}
                                        r={18}
                                        fill="none"
                                        stroke="#79c4e7 / 0.3)"
                                        strokeWidth={1.5}
                                    />
                                </motion.g>
                            );
                        })}
                    </svg>

                    {/* Cards */}
                    <div
                        className="relative z-10 flex h-full items-center"
                        style={{ paddingLeft: startPad }}
                    >
                        {milestones.map((m, i) => {
                            const isTop = i % 2 === 0;
                            const translateY = isTop ? "translate-y-[-170px]" : "translate-y-[120px]";
                            const revealThreshold = getCardRevealThresholds(i);

                            return (
                                <motion.div
                                    key={`${m.year}-${m.title}`}
                                    className={`relative shrink-0 ${translateY}`}
                                    style={{
                                        width: cardW,
                                        marginRight: gap,
                                        opacity: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, revealThreshold - 0.08), revealThreshold],
                                            [0, 1]
                                        ),
                                        x: useTransform(
                                            scrollYProgress,
                                            [Math.max(0, revealThreshold - 0.08), revealThreshold],
                                            [60, 0]
                                        ),
                                    }}>
                                    <div className="">
                                        <div className="inline-flex items-center gap-2 mb-1.5">
                                            <div className="w-2 h-2 rounded-full b-base milestone-pulse" />
                                            <span className="text-sm font-semibold text-timeline-line">
                                                {m.year}
                                            </span>
                                        </div>

                                        <h3 className="font-semibold text-foreground mb-1.5">
                                            {m.title}
                                        </h3>
                                        <p className="text-gray-700 text-sm">{m.text}</p>
                                        {/* <ul className="list-disc list-inside space-y-1">
                                            {m.description.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className={`text-xs ${i === m.description.length - 1
                                                        ? 'list-none font-medium pt-0.5'
                                                        : 'font-light'
                                                        }`}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul> */}
                                    </div>
                                </motion.div>
                            );
                        })}

                        <div style={{ width: endPad, flexShrink: 0 }} />
                    </div>
                </motion.div>

                {/* Progress */}
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 z-20">
                    <div className="h-1 bg-muted/30 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full b-base rounded-full origin-left"
                            style={{ scaleX: scrollYProgress }}
                        />
                    </div>
                    <div className="flex justify-between mt-3 text-xs text-muted-foreground">
                        <span>1929</span>
                        <span>2026</span>
                    </div>
                    <div className="absolute left-0 right-0 bottom-3 flex justify-center items-center">
                        <span className="text-xs border-2 border-[#79c4e7] t-base font-medium px-4 py-2 bg-white rounded-2xl">{milestones[activeIndex]?.year}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MilestoneTimeline;
