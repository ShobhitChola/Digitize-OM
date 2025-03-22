'use client'
import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(' ');


export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget, 
        offset: ['start end', 'end end']
    })

    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0,1], [0, words.length])

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(Math.floor(latest))
        })
    }, [wordIndex])

    return <section className="py-20 lg:py-30">
        <div className="container">
            <div className="sticky top-20 md:top-28 lg:top-40">
                <div className="flex justify-center">
                    <Tag>Introducing DIgitaliss</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>Your creative process deserves better.</span>{" "}
                    <span>{words.map((word, wordIndex) => (
                        <span key={wordIndex} className={twMerge("transition duration-500 text-black/15", wordIndex < currentWord && 'text-black')}>{word} </span>
                    ))}</span>
                    <span className="text-[#1A73E8] block">That's why we built <br /> Digitalis Marketing</span>
                </div>
            </div>
            <div className="h-[150vh]" ref={scrollTarget}></div>
        </div>
    </section>
}
