import { Experience } from "@/interfaces/experience";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "content", "posts");
const experiencesDirectory = join(process.cwd(), "content", "experiences");

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getExperienceSlugs() {
  if (!fs.existsSync(experiencesDirectory)) {
    return [];
  }
  return fs.readdirSync(experiencesDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getExperienceBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(experiencesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: realSlug, content } as Experience;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      const date1 = post1?.date ?? 0;
      const date2 = post2?.date ?? 0;
      return date1 > date2 ? -1 : 1;
  });
  
  return posts;
}

export function getAllExperience(): Experience[] {
  const slugs = getExperienceSlugs();
  const experiences = slugs
    .map((slug) => getExperienceBySlug(slug))
    .sort((experience1, experience2) => {
      const start_date1 = experience1?.start_date ?? 0;
      const start_date2 = experience2?.start_date ?? 0;
      return start_date1 > start_date2 ? -1 : 1;
  });

  return experiences;
}