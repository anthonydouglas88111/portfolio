import { NextSeo } from "next-seo";
import Link from "next/link";
import { useState } from "react";

import BlogCard from "@/components/blogs/blog-card";
import { BLOG_POSTS } from "@/data/blogs";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Blogs() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories: string[] = [
    "all",
    ...Array.from(new Set(BLOG_POSTS.map((post) => post.category))),
  ];

  const handleCategoryClick = (category: string) => {
    if (category === "all") {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredPosts =
    selectedCategories.length === 0
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => selectedCategories.includes(post.category));

  return (
    <>
      <NextSeo
        title={`Blogs by ${siteMetadata.author} | Software Engineer`}
        description={`Read insights, tutorials, and thoughts on software development, web technologies, and engineering best practices from ${siteMetadata.author}.`}
        canonical={`${siteMetadata.siteUrl}/blogs`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/blogs`,
          title: `Blogs by ${siteMetadata.author} - Software Engineer`,
          description:
            "Explore articles and insights about software development, web technologies, and engineering best practices.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
              alt: `${siteMetadata.author} - Portfolio Image`,
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Blogs, Software Engineering, Web Development, React, JavaScript, Frontend Development, Technical Writing, Programming Tips, Development Tutorials",
          },
        ]}
      />
      <section className="mx-auto mt-6 w-full gap-20 px-6 pb-16 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Blogs
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Thoughts, tutorials, and insights about software development
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  (category === "all" && selectedCategories.length === 0) ||
                  (category !== "all" && selectedCategories.includes(category))
                    ? "bg-accent text-white"
                    : "bg-accent/10 text-accent hover:bg-accent/20"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                No posts found in the selected categories.
              </p>
            </div>
          )}

          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              Interested in staying updated with my latest articles?
            </span>
            <p className="mt-10 text-base md:text-xl">
              Follow me on{" "}
              <Link
                href={siteMetadata.github}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </Link>{" "}
              to get notified when new posts are published.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
