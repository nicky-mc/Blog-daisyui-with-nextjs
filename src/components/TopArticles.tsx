import React from "react";
import BlogCard from "./BlogCard";

const TopArticles = ({ posts }: any) => {
  const topArticles = posts.filter((post: any) => post.topArticle === true);
  const maxCardsToShow = 4;
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-semibold brightness-150">
          Top Articles
        </h1>
      </div>

      <BlogCard posts={topArticles} maxCardsToShow={maxCardsToShow} />
    </div>
  );
};

export default TopArticles;
