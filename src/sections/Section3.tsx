import Tag from "@/components/Tag";

export default function Section3() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Tag Centered */}
                <div className="flex justify-center mb-6">
                    <Tag>GROW YOUR CHANNEL</Tag>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left max-w-3xl w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                            Grow your YouTube channel <br className="hidden sm:block" /> with AI powered Ads
                        </h1>
                        <p className="text-lg sm:text-xl text-black/50 mt-4 sm:mt-6">
                            Maximize every dollar by optimizing targeting, bidding data, and ad quality.
                        </p>
                    </div>

                    {/* Right Side - Responsive Video */}
                    <div className="flex justify-center mt-6">
                        <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] xl:w-[800px] xl:h-[600px] rounded-3xl overflow-hidden">
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
            </div>
        </section>
    );
}
