import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Contact from "../components/Contact";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import axios from "axios";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Revaluablegold.com | Sell Gold Online at Best market Rate</title>
        <meta
          name="description"
          content="Revaluablegold.com is the best platform to get instant cash on hand"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Revaluablegold.money"
        title=" Why should you sell to us">
        Revaluablegold.com is online gold buyer platform. Our dealer is well experienced personnel in gold industry for nearly 22 years. He has been an employee in most renowned Jewellery shops. He values 100% honesty and Quality of Service over a cheap, low-grade services. And we can guarantee to return the merchandise, if you are not 100% satisfied with our service.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
      id="myForm"
        pretitle="Customer Enquiry Form"
        title="Submit your Form">
        Our 20+ years experienced professional will get back to you through WhatsApp with Best quoted rate.
      </SectionTitle>
      <Video />
      <Contact/>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

