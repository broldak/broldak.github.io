import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/components/markdown-styles.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const dynamicParams = false;

const Post = async (props: Params) => {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="w-full">
      <div className="mb-4">
        <Link href="/blog">&lt; Back to Blog</Link>
      </div>
      <article>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
};

export default Post;

type Params = {
  params: Promise<{
    slug: string;
  }>;
};



export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Brian's Blog`;

  return {
    title,
    openGraph: {
      title
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
