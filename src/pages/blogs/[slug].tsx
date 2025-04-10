import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { BookOpen, Clock, Calendar } from "lucide-react";

import PageTransitionAnimation from "@/components/page-transition-animation";
import { BLOG_DATA } from "@/data/blogs";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = BLOG_DATA.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-[700px] items-center justify-center md:max-h-[600px]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
          <p className="mt-4 text-muted-foreground">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/blogs"
            className="mt-4 inline-block text-accent hover:text-accent/70"
          >
            Return to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <NextSeo
        title={`${post.title} - ${siteMetadata.author} Blogs`}
        description={post.description}
        canonical={`${siteMetadata.siteUrl}/blogs/${post.slug}`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/blogs/${post.slug}`,
          title: post.title,
          description: post.description,
          images: post.image
            ? [
                {
                  url: post.image,
                  alt: post.title,
                },
              ]
            : [
                {
                  url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
                  alt: `${siteMetadata.author} - Portfolio Image`,
                },
              ],
          siteName: siteMetadata.siteName,
          type: "article",
          article: {
            publishedTime: post.date,
            authors: [siteMetadata.siteUrl],
            tags: post.tags,
          },
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: post.tags.join(","),
          },
        ]}
      />
      <AnimatePresence>
        <PageTransitionAnimation key="page-transition" />
        <article className="mx-auto mt-24 w-full gap-20 px-6 pb-16 sm:px-14 md:px-20">
          <div className="relative mx-auto max-w-7xl">
            <div className="fixed top-40 z-40 w-fit">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-md ring-1 ring-zinc-200 backdrop-blur-md hover:text-accent dark:ring-accent/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Go Back
              </button>
            </div>

            <div className="mx-auto max-w-3xl">
              <header className="mb-8">
                <div className="flex flex-col justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <time className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h1 className="mt-4 text-3xl font-bold text-foreground md:text-4xl">
                  {post.title}
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </header>

              {post.image && (
                <div className="mb-8 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={10000}
                    height={10000}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none dark:prose-invert">
                {post.content === "Coming soon..." ? (
                  <div className="rounded-lg bg-background p-6 text-center">
                    <h2 className="text-xl font-semibold text-foreground">
                      Content Coming Soon
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                      This article is currently being written. Check back soon
                      for the full content!
                    </p>
                  </div>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                )}
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <h2 className="text-xl font-semibold text-foreground">
                  About the Author
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {siteMetadata.author} is a Software Engineer passionate about
                  building scalable web applications and sharing knowledge with
                  the developer community.
                </p>
                <div className="mt-4 flex gap-4">
                  <Link
                    href={siteMetadata.github}
                    target="_blank"
                    className="text-accent hover:text-accent/70"
                  >
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </AnimatePresence>
    </>
  );
}
