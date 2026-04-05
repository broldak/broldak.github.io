import { getAllExperience } from "@/lib/api";
import Link from "next/link";
import dayjs from "dayjs";

export default function Experience() {
  const experiences = getAllExperience();

  return (
    <div className="flex flex-col flex-1">
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold text-5xl tracking-tight-heading text-white">
            Experience
          </h1>
        </div>
      </section>

      <section className="w-full px-8 lg:px-16 pb-16">
        <div className="max-w-5xl mx-auto">
          <ul>
            {experiences.map((experience, idx) => (
              <li
                key={experience.slug}
                className={`py-8 flex items-center justify-between ${
                  idx !== experiences.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <h2 className="font-heading text-2xl font-bold text-white">
                  <Link href={`/experience/${experience.slug}`}>
                    {experience.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted shrink-0">
                  {dayjs(experience.start_date).format("MMM YYYY")} -{" "}
                  {experience.end_date
                    ? dayjs(experience.end_date).format("MMM YYYY")
                    : "Present"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
