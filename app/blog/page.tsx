import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import classNames from "classnames";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-center">Blog</h1>
      <ul>
        {posts.map((post, idx) => (
          <li key={post.slug} className={classNames({
            'py-8 flex items-center': true,
            'border-b border-slate-500': idx !== posts.length - 1
          })}>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-md">{post.excerpt}</p>
              <p className="text-md text-gray-400 mt-2">{post.date}</p>
            </div>

            <div>
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
