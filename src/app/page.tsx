import ChooseUsSection from "./components/ChooseUs";
import ExpertiseSection from "./components/Expertise";
import Footer from "./components/Footer";
import FounderMessage from "./components/FounderMessage";
import Header from "./components/Header";
import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ChooseUsSection />
      <FounderMessage />
      <ExpertiseSection />
      <Footer />
    </>
  );
}