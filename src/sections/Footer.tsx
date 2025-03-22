import logoImage from "../assets/images/Digitize Logo - Option 6.png";
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return <section className="py-16">
        <div className="container">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                <div>
                    <Image src={logoImage} alt="logo" 
                    className="ml-3 h-10 md:h-10 w-auto"
                    />
                </div>
                <div>
                    <nav className="flex gap-6">
                        {footerLinks.map((link, index) => (
                            <a key={index} href={link.href} className="text-black/50 text-sm">{link.label}</a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    </section>;
}
