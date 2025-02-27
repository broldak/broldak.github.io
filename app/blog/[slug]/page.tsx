import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/components/markdown-styles.module.css";
import Link from "next/link";

const Post = async ({ params }: { params: { slug: string } }) => {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <div className="w-[80%]">
      <div className="mb-4">
        <Link href="/blog">&lt; Back to Blog</Link>
      </div>
      <article>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        {post.author && <h2 className="text-md mt-1">{post.author}</h2>}
        <p className="text-md text-gray-400 mt-1">{post.date}</p>
        <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
};

export default Post;
