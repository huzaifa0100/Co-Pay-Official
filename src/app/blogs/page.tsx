import ProjectGrid from "@/components/Blogs";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function About() {
  return (
    <Container>
      <SectionTitle title="Our Blogs">
        Explore insights, tips, and stories from our experts.
      </SectionTitle>

      <ProjectGrid />
    </Container>
  );
}
