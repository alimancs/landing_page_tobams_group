import BookCTA from "./components/BookCTA";
import ContactCTA from "./components/ContactCTA";
import EngagementSection from "./components/EngagementSection";
import Footer from "./components/Footer";
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import ServiceSection from "./components/services-section/ServiceSection";
import TestimonialsSection from "./components/testimonial-section/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans">
      <Header />
      <HeroSection/>
      <OverviewSection/>
      <ServiceSection/>
      <EngagementSection/>
      <BookCTA/>
      <TestimonialsSection/>
      <ContactCTA/>
      <Footer/>
    </div>
  );
}
