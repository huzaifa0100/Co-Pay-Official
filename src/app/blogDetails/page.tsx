import BlogDetail from "@/components/blogDetails";
import ProjectGrid from "@/components/Blogs";
import { Container } from "@/components/Container";
import { FeaturedBlogs } from "@/components/FeaturedBlogs";
import { SectionTitle } from "@/components/SectionTitle";

export default function About() {
  return (
    <Container>
      <BlogDetail />
      <FeaturedBlogs />
    </Container>
  );
}
