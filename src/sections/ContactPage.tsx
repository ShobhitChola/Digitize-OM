"use client";

import { useState } from "react";
import Thankyou from "./Thankyou"; 
import { useRouter } from "next/navigation";

export default function EmailPopup({ }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); 
    }
  };


  const handleClose = () => {
    setIsSubmitted(false); 
    router.push("/"); 
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="container relative">
        <button
          className="absolute top-0 sm:right-0 md:right-12 lg:right-52 text-gray-600 hover:text-black"
          onClick={handleClose}
        >
          ✖
        </button>

        {isSubmitted ? (
          <Thankyou onClose={handleClose} /> 
        ) : (
          <>
            <div className="flex flex-col items-center justify-center space-y-6 text-center md:text-center">
              <div>
                <h1 className="text-5xl font-semibold">
                  Ready to <span className="text-[#1A73E8]">100x</span> your Growth?
                </h1>
              </div>
              <div>
                <h3 className="text-lg">
                  Fill out the details below and let us help you reach your goal audience
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-12 max-w-md mx-auto md:max-w-lg">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-2 border rounded-2xl mb-2"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="industry"
                  placeholder="Enter your industry"
                  className="w-full p-2 border rounded-2xl mb-2"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded-2xl mb-4"
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded-full font-semibold flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="animate-spin border-t-2 border-white border-solid h-5 w-5 rounded-full"></span>
                  ) : (
                    "Get Projected Analysis"
                  )}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
