import About from "@/components/Contact/Contact";
import Divider from "@/components/Divider/Divider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";


export const metadata = {
  title: "Contact - Rajkaran Mishra",
  description:
    "Rajkaran Mishra is a programmer, hacker and writer. He writes about self-improvement.",
};

export default function Contact() {
    return (
        <>
        <Navbar />
        <About />
        <Divider />
        <Footer />
        </>
    )
}