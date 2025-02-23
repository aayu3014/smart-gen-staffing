import Head from "next/head";
import Header from "../components/Header";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us - SmartGen Staffing</title>
        <meta name="description" content="Learn more about SmartGen Staffing, our mission, values, and team." />
      </Head>

      <Header />

      <section className="about-section">
        <h1>Welcome to SmartGen Staffing</h1>
        <p>
          At SmartGen Staffing, we are dedicated to connecting top talent with the best opportunities.
          Our goal is to help businesses find the right candidates and build a successful workforce.
        </p>
      </section>
    </>
  );
}
