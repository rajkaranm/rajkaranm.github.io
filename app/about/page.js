import Divider from "@/components/Divider/Divider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import AboutMe from "@/components/About/About";

export const metadata = {
  title: "About - Rajkaran Mishra",
  description:
    "Rajkaran Mishra is a programmer, hacker and writer. He writes about self-improvement.",
};

export default function About() {
    return (
        <>
        <Navbar />
        <AboutMe />
        <Divider />
        <Footer />
        </>
    )
}