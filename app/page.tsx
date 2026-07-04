import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Products />

        <About />

        <WhyChooseUs />

        <Testimonials />

        <Contact />

        <Footer />
      </main>

      <FloatingWhatsApp />
    </>
  );
}