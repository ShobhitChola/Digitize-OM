import Tag from "@/components/Tag";
import Image from "next/image";
import email_image from "@/assets/images/email_marketing.png"

export default function Section6() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center mb-10 lg:mb-0">
                <Tag>email marketing</Tag>
            </div>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-1">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left max-w-3xl w-full">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight whitespace-nowrap">
                        From leads to sales, <br />
                        With A.I powered <br />              
                        email campaigns 
                        </h1>
                        <p className="text-xl text-black/50 mt-6">
                        Its all about the copy- engage customers and build <br /> relationships with professionally written emails.</p>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center justify-center relative w-[400px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[700px] lg:h-[500px] mt-12 rounded-3xl">
                        <Image src={email_image} alt="email_marketing_image"
                        className="object-cover rounded-3xl"
                        width={500}
                        />
                    </div>
                </div>
        </div>
    </section>;
}