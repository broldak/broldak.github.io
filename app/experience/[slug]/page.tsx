import { getAllExperience, getExperienceBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/components/markdown-styles.module.css";
import Link from "next/link";
import { Metadata } from "next";

const ExperiencePost = async (props: Params) => {
  const params = await props.params;
  const post = getExperienceBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col flex-1">
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/experience">&larr; Back to Experience</Link>
          </div>
          <article>
            <h1 className="font-heading font-extrabold text-5xl tracking-tight-heading text-white">
              {post.title}
            </h1>
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePost;

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
      title,
    },
  };
}

export async function generateStaticParams() {
  const experiences = getAllExperience();

  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}
