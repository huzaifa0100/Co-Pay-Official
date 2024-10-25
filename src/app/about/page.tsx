import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { AboutUs } from "@/components/aboutsec";
import { ourmission, ourstory, workwithus } from "@/components/aboutsecdata";
import Commits from "@/components/commitments";
import { care, simple, trust } from "@/components/commits";

export default function About() {
  return (
    <Container>
      <SectionTitle title="Meet CoPay Health">
        COPAY HEALTH simplifies patient payments and reduces no-shows with
        AI-driven solutions, enhancing the healthcare experience for providers
        and patients.
      </SectionTitle>

      <AboutUs data={ourstory} />

      <SectionTitle title="Our Commitments">
        COPAY HEALTH simplifies patient payments and reduces no-shows with
        AI-driven solutions, enhancing the healthcare experience for providers
        and patients.
      </SectionTitle>
      <Commits />

      <AboutUs data={ourmission} />

      <SectionTitle
        // preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <AboutUs data={workwithus} imgPos="right" />
    </Container>
  );
}
