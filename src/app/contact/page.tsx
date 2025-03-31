"use client";
import ContactPage from "@/sections/ContactPage";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  return <ContactPage onClose={handleClose} />;
}
