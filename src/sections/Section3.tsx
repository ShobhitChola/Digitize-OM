import Tag from "@/components/Tag";

export default function Section3() {
    return (
        <section className="py-14 lg:py-0">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Tag Centered */}
                <div className="flex justify-center mb-6">
                    <Tag>GROW CHANNEL</Tag>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left max-w-3xl w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                            Grow your YouTube channel with AI powered Ads
                        </h1>
                        <p className="text-lg sm:text-xl text-black/50 mt-4 sm:mt-6">
                            Maximize every dollar by optimizing targeting, bidding data, and ad quality.
                        </p>
                    </div>

                    {/* Right Side - Responsive Video */}
                    <div className="flex justify-center -mt-6">
                        <div className="relative w-[500px] h-[300px] md:w-[700px] md:h-[600px] lg:w-[600px] lg:h-[550px] xl:w-[900px] xl:h-[600px] rounded-3xl overflow-hidden">
                            <video
                            src="/Final Graph AD - Redesigned (1).mp4"
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
