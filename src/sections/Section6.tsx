import Tag from "@/components/Tag";
import Image from "next/image";
import email_image from "@/assets/images/email_marketing.png";

export default function Section6() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Tag Centered */}
                <div className="flex justify-center mb-6">
                    <Tag>email marketing</Tag>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                    {/* Left Side - Text Content */}
                    <div className="text-center lg:text-left max-w-3xl w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                            From leads to sales, <br className="hidden sm:block" />
                            With A.I powered <br className="hidden sm:block" />
                            email campaigns
                        </h1>
                        <p className="text-lg sm:text-xl text-black/50 mt-4 sm:mt-6">
                            It&apos;s all about the copy—engage customers and build
                            relationships with professionally written emails.
                        </p>
                    </div>

                    {/* Right Side - Responsive Image */}
                    <div className="flex justify-center items-center w-full">
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-3xl">
                            <Image
                                src={email_image}
                                alt="Email Marketing"
                                className="w-full h-auto object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
