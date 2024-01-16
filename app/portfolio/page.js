import Divider from "@/components/Divider/Divider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";


export const metadata = {
  title: "Portfolio - Rajkaran Mishra",
  description:
    "Rajkaran Mishra is a programmer, hacker and writer. He writes about self-improvement.",
};

export default function Portfolio() {
    return (
        <div>
            <Navbar />
            <Projects />
            <Divider />
            <Footer />
        </div>
    )
}