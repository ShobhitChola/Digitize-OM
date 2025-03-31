'use client'
import Tag from "@/components/Tag";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're working hard to attract new clients, but traditional marketing methods can slow you down with outdated strategies and high costs. That's why we created`;
const words = text.split(' ');

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollTarget, 
        offset: ['start start', 'end start']
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0.05, 0.95], [0, words.length - 1], { clamp: true });

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(Math.floor(latest));
        });
    }, [wordIndex]);

    return (
        <section className="py-20 lg:py-30">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing Digitaliss</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>{" "}
                        <span>
                            {words.map((word, index) => (
                                <motion.span 
                                    key={index} 
                                    className={twMerge(
                                        "transition duration-300 text-black/15", 
                                        index <= currentWord && 'text-black' // 🔥 Fix: Ensures every word is updated
                                    )}
                                >
                                    {word}{" "}
                                </motion.span>
                            ))}
                        </span>
                        <span className="text-[#1A73E8] block">Digitize Open Media</span>
                    </div>
                </div>
                
                <div className="h-[80vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
