const Experience = ({ experience }: { experience: { title: string, company: string, url: string } }) => {
  return (
    <div>
      <h3 className="text-lg">
        {experience.title} @{" "}
        <a
          href={experience.url}
          target="_blank"
        >
          {experience.company}
        </a>
      </h3>
    </div>
  )
}

export default Experience;