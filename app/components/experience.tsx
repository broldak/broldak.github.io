import Link from "next/link";

const Experience = ({ experience }: { experience: { title: string, company: string, url: string } }) => {
  return (
    <div>
      <h3 className="text-lg">
        {experience.title} @{" "}
        <Link
          href={experience.url}
          target="_blank"
        >
          {experience.company}
          </Link>
      </h3>
    </div>
  )
}

export default Experience;