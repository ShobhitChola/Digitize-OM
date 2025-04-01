import Tag from "@/components/Tag";
import Image from "next/image";
import web_image from "@/assets/images/ChatGPT Image Mar 30, 2025, 02_53_44 PM.png";

export default function Section5() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex justify-center mb-10 lg:mb-0">
                    <Tag>website Design</Tag>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-4xl font-medium text-center mt-6">Increase conversions with professional</h2>
                        <h1 className="text-6xl font-medium text-center mt-1 text-[#1A73E8]">Web Design</h1>
                        <h3 className="text-2xl text-black/50 mt-8 text-center">
                            First impressions matter- <br />
                            Make sure your website reflects your brand
                            and builds credibility.
                        </h3>
                    </div>
                    {/* Right Side - Responsive Image */}
                    <div className="flex justify-center items-center w-full">
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-3xl">
                            <Image
                                src={web_image}
                                alt="Email Marketing"
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};