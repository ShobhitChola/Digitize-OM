import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import GoogleBusiness from "@/sections/GoogleBusiness";
import Section3 from "@/sections/Section3";
import Section5 from "@/sections/Section5";
import Section6 from "@/sections/Section6";
import Section7 from "@/sections/Section7";
import Features from "@/sections/Features";
import LogoTicker from "@/sections/LogoTicker";
import Integrations from "@/sections/Integrations";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import PopupWrapper from "@/sections/PopupWrapper";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">
      <PopupWrapper />
      <Navbar />
      <Hero />
      <GoogleBusiness />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Features />
      <LogoTicker />
      <Integrations />
      <CallToAction />
      <Footer />
      </div>
    </>
  );
}
