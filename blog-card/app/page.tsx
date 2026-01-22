import Image from "next/image";
import { BlogCard } from "./components/BlogCard";

export default function Home() {
  return (
    <div className="bg-amber-300 min-h-screen flex items-center justify-center p-6">
      <BlogCard
        title={`HTML & CSS foundations`}
        description={
          "These languages are the backbone of every website, defining structure, content, and presentation."
        }
        category="Learning"
        date="Published 21 Dec 2023"
        authorName="Greg Hooper"
        image="/images/illustration-article.svg"
        authorImage="/images/image-avatar.webp"
      />
    </div>
  );
}
