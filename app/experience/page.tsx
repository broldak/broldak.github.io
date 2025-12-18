import { getAllExperience } from "@/lib/api";
import Link from "next/link";
import classNames from "classnames";
import dayjs from "dayjs";

export default function Experience() {
  const experiences = getAllExperience();

  return (
    <div className="w-full">
      <h1 className="text-4xl font-bold text-center">Experience</h1>

      <ul>
        {experiences.map((experience, idx) => (
          <li key={experience.slug} className={classNames({
            'py-8 flex items-center': true,
            'border-b border-gray-400': idx !== experiences.length - 1
          })}>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">
                <Link href={`/experience/${experience.slug}`}>{experience.title}</Link>
              </h2>
              <p className="text-md text-gray-300 mt-2">{dayjs(experience.start_date).format('MMM YYYY')} - {experience.end_date ? dayjs(experience.end_date).format('MMM YYYY') : 'Present'}</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
