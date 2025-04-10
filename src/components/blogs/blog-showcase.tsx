import Link from "next/link";
import Slider from "react-slick";
import { motion } from "framer-motion";

import { ArrowTopRight } from "@/components/icons";
import { BlogCardProps } from "./blog-card";

interface BlogShowcaseProps {
  blogs: BlogCardProps[];
}

export default function BlogShowcase({ blogs }: BlogShowcaseProps) {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="relative z-10 overflow-hidden px-6 py-16 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="bg-gradient-to-r from-accent via-accent/80 to-accent bg-clip-text p-2 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Latest Blog Posts
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
            Explore my thoughts and insights on web development, programming,
            and technology.
          </p>
        </motion.div>

        <div className="mt-8 lg:mt-12">
          <Slider {...sliderSettings} className="blog-carousel">
            {blogs.slice(0, 3).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full bg-background"
              >
                <div className="relative flex h-full flex-col overflow-hidden rounded-lg bg-white/5 shadow-lg transition-all dark:bg-zinc-900/50">
                  <div className="flex h-full flex-col justify-between">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                      <div className="flex flex-col gap-4">
                        <h3 className="line-clamp-2 text-xl font-bold text-accent transition-colors duration-300 sm:text-2xl">
                          {blog.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="rounded-full bg-accent/10 px-3 py-1 text-sm text-accent"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="line-clamp-3 text-sm text-zinc-600 dark:text-zinc-400">
                          {blog.description}
                        </p>
                        <div className="flex items-center justify-end gap-4">
                          <Link
                            href={`/blogs/${blog.slug}`}
                            className="group inline-flex items-center gap-2 text-accent hover:text-accent/80"
                          >
                            <span>Read More</span>
                            <ArrowTopRight className="h-4 w-4 rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-4 rounded-full bg-accent/10 px-6 py-3 text-base font-semibold text-accent transition-all hover:bg-accent hover:text-white sm:text-lg md:text-xl"
          >
            <span>View All Blogs</span>
            <ArrowTopRight className="h-5 w-5 rotate-45 transition-transform duration-300 group-hover:rotate-0" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
