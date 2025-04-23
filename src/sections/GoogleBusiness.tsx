import Tag from "@/components/Tag";

export default function GoogleBusiness() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        {/* Tag Centered */}
        <div className="flex justify-center mb-6">
          <Tag>Increase Ranking</Tag>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-tight">
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
            <p className="text-lg sm:text-xl text-black/50 mt-4 sm:mt-6">
              Beat out the local competition, get more reviews, <br className="hidden sm:block" /> 
              get better reviews, and have everyone choose you.
            </p>
          </div>

          {/* Right Side - Responsive Video */}
          <div className="flex justify-center mt-6">
            <div className="relative w-[400px] h-[300px] md:w-[700px] md:h-[500px] lg:w-[600px] lg:h-[500px] xl:w-[800px] xl:h-[600px] rounded-3xl overflow-hidden">
              <video
                src="/Final Google Map AD - Redesigned.mp4"
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
