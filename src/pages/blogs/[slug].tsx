import { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Calendar,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "lucide-react";

import { BlogCardProps } from "@/components/blogs/blog-card";
import { BLOG_DATA } from "@/data/blogs";
import { metadata } from "@/data/metadata.mjs";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = useState<BlogCardProps | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const data = BLOG_DATA.find((post) => post.slug === slug);
    setPost(data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-[700px] items-center justify-center md:max-h-[600px]">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            className="relative h-16 w-16"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute left-0 top-0 h-8 w-8 rounded-full border-4 border-accent/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute right-0 top-0 h-8 w-8 rounded-full border-4 border-accent/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-8 w-8 rounded-full border-4 border-accent/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-4 border-accent/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Loading Blog Post
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Please wait while we fetch the content...
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

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
        title={`${post.title} | ${metadata.name} Blogs`}
        description={post.description}
        canonical={`${metadata.portfolioUrl}/blogs/${post.slug}`}
        openGraph={{
          url: `${metadata.portfolioUrl}/blogs/${post.slug}`,
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
                  url: `${metadata.portfolioUrl}${metadata.portfolioImage}`,
                  alt: `${metadata.name} - Portfolio Image`,
                },
              ],
          siteName: metadata.portfolioName,
          type: "article",
          article: {
            publishedTime: post.date,
            authors: [metadata.name],
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
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-24 w-full gap-20 px-6 pb-16 sm:px-14 md:px-20"
        >
          <div className="relative mx-auto max-w-7xl">
            <div className="fixed top-40 z-40 w-fit">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 rounded-full bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-md ring-1 ring-zinc-200 backdrop-blur-md hover:text-accent dark:ring-accent/50"
              >
                <ArrowLeftIcon className="h-4 w-4" />
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
                      month: "short",
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
                  {metadata.name} is a {metadata.jobTitle} passionate about
                  building scalable web applications and sharing knowledge with
                  the developer community.
                </p>
                <div className="mt-4 flex gap-4">
                  <Link
                    href={metadata.github}
                    target="_blank"
                    className="text-accent hover:text-accent/70"
                  >
                    GitHub
                  </Link>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
                {BLOG_DATA.findIndex((p) => p.slug === post.slug) > 0 && (
                  <Link
                    href={`/blogs/${
                      BLOG_DATA[
                        BLOG_DATA.findIndex((p) => p.slug === post.slug) - 1
                      ].slug
                    }`}
                    className="flex items-center gap-2 rounded-lg bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-md ring-1 ring-zinc-200 backdrop-blur-md hover:text-accent dark:ring-accent/50"
                  >
                    <ArrowLeftIcon className="h-4 w-4" />
                    Prev Post
                  </Link>
                )}
                {BLOG_DATA.findIndex((p) => p.slug === post.slug) <
                  BLOG_DATA.length - 1 && (
                  <Link
                    href={`/blogs/${
                      BLOG_DATA[
                        BLOG_DATA.findIndex((p) => p.slug === post.slug) + 1
                      ].slug
                    }`}
                    className="flex items-center gap-2 rounded-lg bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-md ring-1 ring-zinc-200 backdrop-blur-md hover:text-accent dark:ring-accent/50"
                  >
                    Next Post
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.article>
      </AnimatePresence>
    </>
  );
}
