import Tag from "@/components/Tag";

export default function GoogleBusiness() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex justify-center mb-10 lg:mb-0">
          <Tag>Google Business</Tag>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight">
              Rank at the top of all <br />
              <span className="pr-2">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              searches
            </h1>
            <p className="text-xl text-black/50 mt-6">
              Beat out the local competition, get more reviews, <br /> get better reviews, and have everyone choose you.
            </p>
          </div>
          {/* Right Side - GIF */}
          <div className="relative w-[500px] h-[400px] md:w-[600px] md:h-[500px] lg:w-[600px] lg:h-[600px] overflow-hidden mt-6 rounded-3xl">
            <video
              src="/MP4 Google Ad Animation.mp4"
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
  );
}