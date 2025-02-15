"use client";
import Header from "../components/Header";
import DreamJobHero from "./dream-job";
import JobSearchHero from "./job-search-hero";
import FeaturedJobs from "./featured-jobs";
import ExpertiseSection from "./expertise-section";
import Footer from "../components/Footer";


export default function CandidatesServices() {
  return (
    <>
      <Header />
      <DreamJobHero />
      <JobSearchHero />
      <FeaturedJobs />
      <ExpertiseSection /> {/* ✅ Added missing component */}
      <Footer />
    </>
  );
}
