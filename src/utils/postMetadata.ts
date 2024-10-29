import { format } from "date-fns";
import fs from "fs";
import matter from "gray-matter";

const postMetadata = (basePath: any) => {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`content/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      description: matterResult.data.description,
      slug: filename.replace(".mdx", ""),
      featuredPost: matterResult.data.featuredPost,
      topArticle: matterResult.data.topArticle,
      category: matterResult.data.category,
      image: matterResult.data.image,
      date: format(new Date(matterResult.data.date), "MMMM d, yyyy"),
    };
  });
  return posts;
};

export default postMetadata;
