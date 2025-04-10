import { useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import PageTransitionAnimation from "@/components/page-transition-animation";
import BlogCard from "@/components/blogs/blog-card";
import { BLOG_DATA } from "@/data/blogs";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Blogs() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories: string[] = [
    "all",
    ...Array.from(new Set(BLOG_DATA.map((post) => post.category))),
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
      ? BLOG_DATA
      : BLOG_DATA.filter((post) => selectedCategories.includes(post.category));

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
      <AnimatePresence>
        <PageTransitionAnimation key="page-transition" />
        <section className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Blogs
              </h1>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Thoughts, tutorials, and insights about software development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-8 overflow-x-auto pb-2"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      (category === "all" && selectedCategories.length === 0) ||
                      (category !== "all" &&
                        selectedCategories.includes(category))
                        ? "bg-accent text-white shadow-md shadow-accent/20"
                        : "bg-accent/10 text-accent hover:bg-accent/20 hover:shadow-sm"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
            >
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </motion.div>

            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-16 flex flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/20 p-8 text-center"
              >
                <p className="text-lg font-medium text-muted-foreground">
                  No posts found in the selected categories.
                </p>
                <button
                  onClick={() => setSelectedCategories([])}
                  className="mt-4 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
                >
                  Clear filters
                </button>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto mt-20 max-w-3xl rounded-2xl bg-accent/5 p-8 text-center sm:p-12"
            >
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Interested in staying updated with my latest articles?
              </h2>
              <p className="mt-6 text-base text-muted-foreground sm:text-lg">
                Follow me on{" "}
                <Link
                  href={siteMetadata.github}
                  target="_blank"
                  className="font-semibold text-accent underline underline-offset-4 transition-colors hover:text-accent/70"
                >
                  Github
                </Link>{" "}
                to get notified when new posts are published.
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatePresence>
    </>
  );
}
