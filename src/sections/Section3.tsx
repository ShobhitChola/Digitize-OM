import Tag from "@/components/Tag";
import Image from "next/image";

export default function Section3() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="flex justify-center mb-10 lg:mb-0">
                    <Tag>GROW YOUR CHANNEL</Tag>
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left max-w-3xl w-full">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight whitespace-nowrap">
                            Grow your YouTube channel <br />with AI powered Ads
                        </h1>
                        <p className="text-xl text-black/50 mt-6">
                            Maximize every dollar by optimizing targeting, bidding data, and ad quality.
                        </p>
                    </div>

                    {/* Right Side - Video */}
                    <div className="relative w-[500px] h-[400px] md:w-[600px] md:h-[500px] lg:w-[700px] lg:h-[500px] mt-6 rounded-3xl flex-shrink-0">
                        <video
                            src="/MP4 Graph Animation.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
