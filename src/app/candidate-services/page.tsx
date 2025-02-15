"use-client"
import Header from "../components/Header";
import AtsScreening from "./ats-screeninig";
import EnchanceResume from "./enchance-resume";
import InterviewSection from "./interview-section";
import ResumeBuilderSection from "./resume-builder-section";
import CareerGrowthSection from "./career-growth-section";
import Footer from "../components/Footer";
export default function CandidatesServices() {
  return (
    <>
      <Header />
      <AtsScreening/>
      <EnchanceResume/>
      <InterviewSection/>
      <ResumeBuilderSection/>
      <CareerGrowthSection/>
      <Footer/>
    </>
  );
}
