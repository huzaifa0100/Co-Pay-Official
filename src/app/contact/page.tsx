import { contact1, ourstory } from "@/components/data2";
import { Container } from "@/components/Container";
import { Section } from "@/components/section";
import { SectionTitle } from "@/components/SectionTitle";
import Commits from "@/components/commitments";
import { ContactForm } from "@/components/contactform";
import { SimpleFaq } from "@/components/SimpleFaq";

export default function About() {
  return (
    <Container>
      <SectionTitle title="Contact Us">
        We'd love to talk how we can help you.
      </SectionTitle>

      <ContactForm />
      
      <Commits />

      <SimpleFaq />
    </Container>
  );
}
