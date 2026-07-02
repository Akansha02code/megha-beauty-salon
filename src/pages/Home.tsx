import { Loader } from '@/components/Loader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Statistics } from '@/components/Statistics';
import { Gallery } from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import { InstagramSection } from '@/components/Instagram';
import { CTA } from '@/components/CTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';

export default function Home() {
  return (
    <div className="relative font-sans text-foreground bg-background">
      <Loader />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Statistics />
        <Gallery />
        <Testimonials />
        <InstagramSection />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
