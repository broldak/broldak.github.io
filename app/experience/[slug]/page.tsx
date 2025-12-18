import { getAllExperience, getAllPosts, getExperienceBySlug, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/components/markdown-styles.module.css";
import Link from "next/link";
import { Metadata } from "next";

const Post = async (props: Params) => {
  const params = await props.params;
  const post = getExperienceBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="w-full">
      <div className="mb-4">
        <Link href="/experience">&lt; Back to Experience</Link>
      </div>
      <article className="mt-8">
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
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    return notFound();
  }

  const title = `${experience.title} | Brian's Experience`;

  return {
    title,
    openGraph: {
      title
    },
  };
}

export async function generateStaticParams() {
  const experiences = getAllExperience();

  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}
