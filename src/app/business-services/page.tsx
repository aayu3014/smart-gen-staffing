"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FindTalentSection from "./find-talent-section";
import CandidateSearch from "./candidate-search";
import PricingSection from "./pricing-section";
export default function CandidatesServices() {
  return (
    <>
      <Header />
    <FindTalentSection/>
    <CandidateSearch/>
    <PricingSection/>
      <Footer />
    </>
  );
}
