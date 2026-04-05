import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col flex-1">
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold text-5xl tracking-tight-heading text-white">
            Blog
          </h1>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="w-full px-8 lg:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-muted">
              No posts found. Check back later!
            </p>
          </div>
        </section>
      ) : (
        posts.map((post, idx) => (
          <section
            key={post.slug}
            className="w-full px-8 lg:px-16 py-12"
          >
            <div className="max-w-5xl mx-auto flex items-baseline justify-between gap-8">
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-bold text-white">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-muted">{post.excerpt}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-muted">{post.date}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm mt-1 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
}
