import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { Testimonials } from "@/components/Testimonials";
import { ourmission, ourstory, workwithus } from "@/components/data2";
import Commits from "@/components/commitments";
import { care, simple, trust } from "@/components/commits";
import { Section } from "@/components/section";

export default function About() {
  return (
    <Container>
      <SectionTitle title="Meet CoPay Health">
        COPAY HEALTH simplifies patient payments and reduces no-shows with
        AI-driven solutions, enhancing the healthcare experience for providers
        and patients.
      </SectionTitle>

      <Section data={ourstory} />

      <SectionTitle title="Our Commitments">
        COPAY HEALTH simplifies patient payments and reduces no-shows with
        AI-driven solutions, enhancing the healthcare experience for providers
        and patients.
      </SectionTitle>
      <Commits />

      <Section data={ourmission} />

      <SectionTitle
        // preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <Section data={workwithus} imgPos="right" />
    </Container>
  );
}
