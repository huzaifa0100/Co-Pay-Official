import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Fosdoter } from "@/components/pricingSec";

import {
  benefitFour,
  benefitOne,
  benefitThree,
  benefitTwo,
} from "@/components/data";
import Timeline from "@/components/workflow";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        // preTitle="Health Solutions"
        title="Why Choose Our Health Solutions"
      >
        Our health solutions are designed to enhance patient care and streamline
        healthcare processes. Built with cutting-edge technology and a focus on
        accessibility, our platform is completely open-source and tailored for
        healthcare providers and organizations.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Benefits imgPos="right" data={benefitFour} />
      <SectionTitle title="How it works">
        Streamline your healthcare experience by effortlessly managing
        co-payments with our user-friendly platform
      </SectionTitle>

      <Timeline />

      {/* <Fosdoter /> */}

      {/* <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

      <SectionTitle
        // preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle
        //  preTitle="FAQ"
        title="Frequently Asked Questions"
      >
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      {/* <Cta /> */}
    </Container>
  );
}