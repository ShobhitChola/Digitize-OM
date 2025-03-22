import Button from "@/components/Button";
import Link from "next/link";

export default function Hero() {
    return <section className="py-14">
  <div className="container">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      {/* Left Side - Text Content */}
      <div className="text-center lg:text-left max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">
          YouTube <span className="text-[#1A73E8]">Ads</span> <br /> Powered by Google
        </h1>
        <p className="text-xl text-black/50 mt-6">
            Reach millions, optimize performance, and turn engagement into real results.
        </p>
        <div className="mt-8">
          <Link href="/contact">
            <Button variant="primary">Let&apos;s Talk</Button>
          </Link>
        </div>
      </div>

      {/* Right Side - GIF */}
      <div className="flex justify-center items-start">
        <div className="relative w-[500px] h-[400px] md:w-[600px] md:h-[500px] lg:w-[600px] lg:h-[500px] overflow-hidden rounded-3xl">
            <video 
                src="/MP4 Youtube Ad Animation.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
            />
        </div>
      </div>
    </div>
  </div>
</section>

}
