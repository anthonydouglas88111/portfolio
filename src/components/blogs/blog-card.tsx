import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  slug: string;
  content: string;
  image: string;
  tags: string[];
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.3,
      }}
      className="w-full overflow-hidden rounded-lg border border-accent/20 bg-background shadow-md transition-shadow duration-150 hover:shadow-md hover:shadow-accent/20 dark:bg-zinc-800 dark:hover:shadow-lg"
    >
      <Link href={`/blogs/${props.slug}`}>
        <article className="bg-card group relative flex flex-col overflow-hidden rounded-lg border border-border transition-all">
          <div className="relative h-60 w-full overflow-hidden">
            <Image
              src={props.image}
              alt={props.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{props.category}</span>
              <span>•</span>
              <span>{props.readTime}</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
              {props.title}
            </h2>
            <p className="text-muted-foreground">{props.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {props.tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            <time className="mt-4 text-sm text-muted-foreground">
              {new Date(props.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
