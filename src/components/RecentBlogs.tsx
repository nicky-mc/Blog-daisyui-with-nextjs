import React from "react";
import BlogCard from "./BlogCard";

const RecentBlogs = ({ posts }: any) => {
  const maxCardsToShow = 6;
  const displayedPosts = posts.slice(0, maxCardsToShow);
  return (
    <div className="w-full">
      <div className="py-10 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-semibold brightness-150">
          Recent Articles
        </h1>
      </div>

      <BlogCard posts={displayedPosts} maxCardsToShow={maxCardsToShow} />
    </div>
  );
};

export default RecentBlogs;
