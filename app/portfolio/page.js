import Divider from "@/components/Divider/Divider";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";


export const metadata = {
  title: "Portfolio - Rajkaran Mishra",
  description:
    "Rajkaran Mishra is a programmer, hacker and writer. He writes about self-improvement.",
};

import Container from "@/components/Container/Container";

export default function Portfolio() {
    return (
        <>
            <Navbar />
            <main>
                <Container>
                    <Projects />
                    <Divider />
                </Container>
            </main>
            <Footer />
        </>
    )
}