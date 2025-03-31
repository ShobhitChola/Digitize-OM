import Thankyou from "@/sections/Thankyou";

export default function ThankyouPage() {
    const handleClose = () => {
        console.log("Closed");
    };

    return <Thankyou onClose={handleClose} />;
}