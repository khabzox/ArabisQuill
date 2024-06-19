import Header from "@/components/HomePage/Header/header";
import Hero from "@/components/HomePage/Hero/hero";
import About from "@/components/HomePage/About/about";
import Contact from "@/components/HomePage/Contact/contact";
import Footer from "@/components/HomePage/Footer/footer";
export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-screen-xl ">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
