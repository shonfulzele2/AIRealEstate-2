import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import DataQuality from "@/components/DataQuality";
import Security from "@/components/Security";
import Integration from "@/components/Integration";
import TeamAdoption from "@/components/TeamAdoption";
import Results from "@/components/Results";
import Expectations from "@/components/Expectations";
import Legal from "@/components/Legal";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>RealEstateAI - AI Automation for Real Estate Professionals</title>
        <meta name="description" content="AI automation solutions that free real estate professionals from administrative burdens, allowing them to focus on building relationships and closing deals." />
        <meta property="og:title" content="RealEstateAI - AI Automation for Real Estate" />
        <meta property="og:description" content="Our AI solutions eliminate repetitive tasks so real estate professionals can focus on what matters." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://realestateai.com" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Solutions />
          <DataQuality />
          <Security />
          <Integration />
          <TeamAdoption />
          <Results />
          <Expectations />
          <Legal />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
