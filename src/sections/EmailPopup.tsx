"use client";

import { useState } from "react";
import Thankyou from "./Thankyou";

export default function EmailPopup({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 pointer-events-auto backdrop-blur-sm">
      <div className="bg-white m-6 p-6 rounded-3xl shadow-lg max-w-md w-full relative">
        <button
          className="absolute top-4 right-5 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✖
        </button>
        {isSubmitted ? (
          <Thankyou onClose={onClose} />
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-4">
              What&apos;s your projected business growth? Find out for FREE
            </h2>
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
          </>
        )}
      </div>
    </div>
  );
}
