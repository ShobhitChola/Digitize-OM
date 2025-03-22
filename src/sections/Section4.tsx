import Tag from "@/components/Tag";

export default function Section4() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center mb-10 lg:mb-0">
                <Tag>VIDEO CREATION</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6">Brick and Mortar?</h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-10">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
              Create video content,<br /> 
              and stream on the <br />
              biggest platforms
            </h1>
            <p className="text-xl text-black/50 mt-6">
            Don't let big brands and <br />
            content creators dominate <br />
            the space. Create high-quality <br />
            video content and stream it <br />
            on the biggest platforms.
            </p>
          </div>
          {/* Right Side */}
            <div className="relative w-[500px] h-[400px] md:w-[600px] md:h-[500px] lg:w-[600px] lg:h-[600px] overflow-hidden mt-6 rounded-3xl">
            <video
              src="/videography.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            </div>
        </div>
    </div>
    </section>
}
