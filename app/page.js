import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IdentityStrip from "@/components/IdentityStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Journey from "@/components/Journey";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <IdentityStrip />
      <About />
      <Skills />
      <Journey />
      <Research />
      <Projects />
      <Interests />
      <GithubSection />
      <Contact />
      <Footer />
    </main>
  );
}
