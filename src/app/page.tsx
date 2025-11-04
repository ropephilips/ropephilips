import About from "@/components/About";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import HeroCarousel from "@/components/HeroCarousel";
import Project from "@/components/Project";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main>
      <section id="home"><HeroCarousel/></section>
      <section id="service"><ServicesSection/></section>
      <section id="projects"><Project/></section>
      <CTASection/>
      <TestimonialSection/>  
      <section id="about"><About/></section>
      <section id="contact"><Contact/></section>  
    </main>
  );
}
