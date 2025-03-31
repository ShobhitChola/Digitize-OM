"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";

import facebooklogo from "@/assets/images/icons8-facebook.svg";
import instagramlogo from "@/assets/images/icons8-instagram.svg";
import linkedinlogo from "@/assets/images/icons8-linkedin.svg";
import snapchatlogo from "@/assets/images/icons8-snapchat.svg";
import telegramlogo from "@/assets/images/icons8-telegram-app.svg";
import tiktoklogo from "@/assets/images/icons8-tiktok.svg";
import whatsapplogo from "@/assets/images/icons8-whatsapp.svg";
import youtubelogo from "@/assets/images/icons8-youtube-logo.svg";

const logos = [
    { name: "Facebook", image: facebooklogo },
    { name: "Instagram", image: instagramlogo },
    { name: "LinkedIn", image: linkedinlogo },
    { name: "WhatsApp", image: whatsapplogo },
    { name: "Youtube", image: youtubelogo },
    { name: "Snapchat", image: snapchatlogo },
    { name: "Telegram", image: telegramlogo },
    { name: "Tiktok", image: tiktoklogo },
];

export default function LogoTicker() {
    return <section className="py-24 overflow-x-clip">
        <div className="container">
            <h3 className="text-center text-black/50 text-xl">Partnered with the largest ad platforms</h3>
            <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div 
                animate={{
                    x: '-50%'
                }}
                transition={{
                    duration: 35,
                    ease: 'linear',
                    repeat: Infinity
                }}
                className="flex flex-none gap-24 pr-24">
                    {Array.from({ length: 2 }).map((_, i) => (
                        <Fragment key={i}>
                            {logos.map(logo => (
                                <div className="flex items-center gap-4" key={logo.name}>
                                    <Image 
                                        src={logo.image} 
                                        key={logo.name} 
                                        alt={logo.name}
                                        className="h-12 w-12"
                                    />
                                    <h1 className="font-semibold">{logo.name}</h1>
                                </div>
                            ))}
                        </Fragment>
                    ))}

                </motion.div>
            </div>
        </div>
    </section>
}
