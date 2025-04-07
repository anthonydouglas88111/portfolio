import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogs";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = BLOG_POSTS.find((post) => post.slug === slug);

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
      <article className="mx-auto mt-6 w-full gap-20 px-6 pb-16 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-3xl">
          <button
            onClick={() => router.back()}
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground hover:text-accent"
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
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
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
            <time className="mt-4 block text-sm text-muted-foreground">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </header>

          {post.image && (
            <div className="mb-8 overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {post.content === "Coming soon..." ? (
              <div className="bg-card rounded-lg p-6 text-center">
                <h2 className="text-xl font-semibold text-foreground">
                  Content Coming Soon
                </h2>
                <p className="mt-4 text-muted-foreground">
                  This article is currently being written. Check back soon for
                  the full content!
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
              building scalable web applications and sharing knowledge with the
              developer community.
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
      </article>
    </>
  );
}
