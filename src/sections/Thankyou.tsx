export default function Thankyou({ }: { onClose: () => void }) {
    return <section className="py-8">
        <div className="container">
            <div className="flex flex-col items-center gap-4 text-center">
                <h1 className="text-4xl font-semibold"><span className="text-[#1A73E8]">Thank you</span> <br /> for reaching out!</h1>
                <h3 className="text-lg font-light">We will get back to you shortly.</h3>
            </div>
        </div>
    </section>;
}