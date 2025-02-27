import { getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/components/markdown-styles.module.css";
import Link from "next/link";

const Post = async (props: { params: { slug: string } }) => {
  try {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
      console.log("Post not found");
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
          <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    );
  } catch {
    console.log("Post not found - Error");
    notFound();
  }
};

export default Post;
