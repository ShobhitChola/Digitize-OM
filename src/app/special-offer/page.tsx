"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function SpecialOfferPage() {
    const formRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        businessName: "",
        goal: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Your details have been submitted!");
        } else {
            alert("Failed to submit. Try again.");
        }
    };

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="max-w-6xl mx-auto px-6 mt-12">
            <section className="flex flex-col lg:flex-row items-center py-16">
                <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
                    <span className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-semibold">
                        Limited Time Offer
                    </span>
                    <h1 className="text-5xl font-bold leading-tight">
                        Get $100 in Free YouTube Ads
                    </h1>
                    <h2 className="text-3xl text-[#1A73E8] font-bold">
                        Let&apos;s Launch Your First Profitable Campaign!
                    </h2>
                    <p className="text-gray-600 text-lg">
                        See if you qualify in under 60 seconds.
                    </p>

                    <button 
                        className="bg-[#1A73E8] text-white px-6 py-3 rounded-full text-lg font-semibold mt-4 shadow-md transition hover:bg-blue-700"
                        onClick={scrollToForm}
                    >
                        See If You Qualify
                    </button>
                </div>

                <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <Image 
                        src='/SpecialOfferImage.jpeg' 
                        alt='Image'
                        width={500}
                        height={500}
                    />
                </div>
            </section>

            {/* Form Section */}
            <div ref={formRef} className="bg-white p-6 shadow-lg rounded-lg mt-12">
                <h2 className="text-3xl font-bold text-center">Check Your Eligibility</h2>
                <p className="text-gray-600 text-center mb-6">
                    Fill out this quick form to see if you qualify for our special offer.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Business or YouTube Channel Name</label>
                        <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your business name"
                            className="w-full border rounded-lg p-2 mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">What are you looking for?</label>
                        <div className="space-y-2 mt-2">
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="goal" value="More Views" onChange={handleChange} required />
                                <span>More Views</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="goal" value="More Sales" onChange={handleChange} required />
                                <span>More Sales</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" name="goal" value="Brand Awareness" onChange={handleChange} required />
                                <span>Brand Awareness</span>
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#1A73E8] text-white px-6 py-3 w-full rounded-full text-lg font-semibold shadow-md transition hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
