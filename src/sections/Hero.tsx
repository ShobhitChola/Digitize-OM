import Button from "@/components/Button";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-14">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left max-w-2xl">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                            YouTube <span className="text-[#1A73E8]">Ads</span> <br /> Powered by Google
                        </h1>
                        <p className="text-lg sm:text-xl text-black/50 mt-4 sm:mt-6">
                            Reach millions, optimize performance, and turn engagement into real results.
                        </p>
                        <div className="mt-6 sm:mt-8">
                            <Link href="/contact">
                                <Button variant="primary">Create Ads</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Video */}
                    <div className="flex justify-center mt-6">
                      <div className="relative w-[300px] h-[200px] sm:w-[400px] sm:h-[300px] md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[500px] xl:w-[800px] xl:h-[600px] rounded-3xl overflow-hidden">
                        <video
                          src="/MP4 Youtube Ad Animation.mp4"
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
