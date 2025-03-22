"use client";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Tag from "@/components/Tag";

export default function ContactPage() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    if (!name || !email || !phone) {
      alert("Please fill out all required fields (Name, Email, Phone).");
      return;
    }

    console.log("Form submitted:", { name, email, phone });

    router.push("/thankyou");
  };

  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg text-black px-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="input bg-transparent border border-black/50 rounded-full h-10 px-4"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg text-black px-2">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input bg-transparent border border-black/50 rounded-full h-10 px-4"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-lg text-black px-2">
                Phone*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="input bg-transparent border border-black/50 rounded-full h-10 px-4"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-lg text-black px-2">
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={3}
                className="input bg-transparent border border-black/50 rounded-2xl p-2 px-4"
              />
            </div>
            <Button variant="primary" className="btn mt-3" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}