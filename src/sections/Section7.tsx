"use client";

import { useEffect } from "react";
import Tag from "@/components/Tag";

export default function Section7() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-24" id="section7">
      <div className="container items-center text-center mb-10 lg:mb-0">
        <Tag>Book Now</Tag>
        {/* Calendly Section */}
        <section
          className="section text-center mt-10"
          id="contact"
          aria-label="contact"
          data-aos="fade-up"
        >
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-medium tracking-tight">
                Ready to scale your business?
            </h1>          
            
            <p className="text-xl text-black/50 mt-6">
                Book a free consultation now and get a full marketing <br />
                strategy audit—no strings attached.
            </p>
          {/* Calendly Widget */}
          <div
            className="calendly-inline-widget "
            data-url="https://calendly.com/alexprint-media/30min"
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </section>
      </div>
    </section>
  );
}
