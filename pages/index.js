import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';
import Contact from '../components/Contact';

import { benefitOne, benefitTwo } from '../components/data';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';

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
        <title>
          Sell Gold Online at Best market Rate  | Revaluablegold.money
        </title>
        <meta
          name="description"
          content="Revaluablegold.money is the best platform to get instant cash on hand"
        />
          <meta
          property="og:title"
          content="Sell Gold Online at Best market Rate | Revaluablegold.money"
        />
        <meta
          name="keywords"
          content="gold buyers in chennai, how to sell gold in chennai, where to sell gold in chennai"
        />
        <meta property="og:site_name" content="Revaluablegold.money" />
        <meta property="og:url" content="https://www.revaluablegold.money" />
        <meta
          property="og:description"
          content="Revaluablegold.money is the best platform to get instant cash on hand"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.revaluablegold.money/img/heroImg.png"
        />
        <meta property="twitter:url" content="https://www.revaluablegold.money" />
        <meta
          property="twitter:title"
          content="Sell Gold Online at Best market Rate | Revaluablegold.money"
        />
        <meta
          property="twitter:description"
          content="Revaluablegold.money is the best platform to get instant cash on hand"
        />
        <meta
          property="twitter:image"
          content="https://www.revaluablegold.money/img/heroImg.png"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Revaluablegold.money"
        title=" Why should you sell to us"
      >
        Revaluablegold.com is online gold buyer platform. Our dealer is well
        experienced personnel in gold industry for nearly 22 years. He values
        100% honesty and Quality of Service over a cheap, low-grade services.
        And we can guarantee to return the merchandise, if you are not 100%
        satisfied with our service.
      </SectionTitle>
      <div id="whatwepay">
        <Benefits data={benefitOne} />
      </div>

      <div id="howitworks">
        {' '}
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      <div id="myForm">
        <SectionTitle pretitle="Customer Enquiry Form" title="Submit your Form">
          Our 20+ years experienced professional will get back to you through
          WhatsApp with Best quoted rate.
        </SectionTitle>
      </div>

      <Contact />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      ></SectionTitle>
      <Testimonials />
      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
