import { contact1, ourstory } from "@/components/data2";
import { ContactForm } from "@/components/contactform";
import { Container } from "@/components/Container";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/SectionTitle";
import { SimpleFaq } from "@/components/SimpleFaq";
import Commits from "@/components/commitments";

export default function About() {
  return (
    <Container>
      <SectionTitle title="Contact Us">
        We'd love to talk how we can help you.
      </SectionTitle>

      <Section data={contact1} />

      <ContactForm />

      <Commits />
    </Container>
  );
}
