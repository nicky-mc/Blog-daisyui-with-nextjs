import FeaturedPost from "../components/FeaturedPost";
import Hero from "../components/Hero";
import NewsletterCard from "../components/NewsletterCard";
import RecentBlogs from "../components/RecentBlogs";
import TopArticles from "../components/TopArticles";
import postMetadata from "../utils/postMetadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my blog",
};

export default function Home() {
  const Metadata = postMetadata("content");

  return (
    <div className="w-full">
      <Hero />
      <div className="px-5 xl:px-10">
        <RecentBlogs posts={Metadata} />
        <FeaturedPost posts={Metadata} />
        <TopArticles posts={Metadata} />
        <NewsletterCard />
      </div>
    </div>
  );
}
