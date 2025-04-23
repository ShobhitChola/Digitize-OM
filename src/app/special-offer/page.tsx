"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

function SpecialOfferContent() {
  const formRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    businessName: "",
    goal: "",
  });

  const [isValid, setIsValid] = useState(true);

  const name = searchParams.get("name") || "";
  const industry = searchParams.get("industry") || "";
  const email = searchParams.get("email") || "";
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) {
      setIsValid(false);
      setTimeout(() => {
        alert("Invalid access. Please use the link from your email.");
        router.push("/");
      }, 300);
    }
  }, [token]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        industry,
        email,
        businessName: formData.businessName,
        goal: formData.goal,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Your details have been submitted!");
      router.push("/");
    } else {
      console.error("Error submitting special offer form:", result.error);
      alert(result.error || "Failed to submit. Try again.");
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative">
      {!isValid && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-md">
        </div>
      )}

      <div
        className={`max-w-6xl mx-auto px-6 mt-12 transition-all duration-300 ${
          !isValid ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
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

          <div className="lg:w-1/2 mt-8 lg:mt-0 rounded-xl">
            <Image
              src="/SpecialOfferImage.jpeg"
              alt="Image"
              width={500}
              height={500}
            />
          </div>
        </section>

        <div
          ref={formRef}
          className="bg-white p-6 shadow-lg rounded-lg mt-12"
        >
          <h2 className="text-3xl font-bold text-center">
            Check Your Eligibility
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Fill out this quick form to see if you qualify for our special
            offer.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">
                Business or YouTube Channel Name
              </label>
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
              <label className="block text-gray-700 font-medium">
                What are you looking for?
              </label>
              <div className="space-y-2 mt-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="goal"
                    value="More Views"
                    onChange={handleChange}
                    required
                  />
                  <span>More Views</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="goal"
                    value="More Sales"
                    onChange={handleChange}
                    required
                  />
                  <span>More Sales</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="goal"
                    value="Brand Awareness"
                    onChange={handleChange}
                    required
                  />
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
    </div>
  );
}

export default function SpecialOfferPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SpecialOfferContent />
    </Suspense>
  );
}
