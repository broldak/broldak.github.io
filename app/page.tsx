import Experience from "./components/experience";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold text-6xl tracking-tight-heading text-white">
            Hello, I'm Brian
          </h1>
          <p className="mt-4 text-lg text-muted">
            I'm a{" "}
            <Link href="https://github.com/broldak" target="_blank">
              software engineering manager
            </Link>
            ,{" "}
            <Link
              href="https://www.strava.com/athletes/11417793"
              target="_blank"
            >
              cyclist
            </Link>
            , and karaoke enthusiast
          </p>
        </div>
      </section>

      {/* Currently */}
      <section className="w-full px-8 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-body tracking-wide-label uppercase text-muted">
            Currently
          </p>
          <div className="mt-4">
            <Experience
              experience={{
                title: "Engineering Manager",
                company: "Confluent",
                url: "https://www.confluent.io",
              }}
            />
          </div>
        </div>
      </section>

      {/* Previously */}
      <section className="w-full px-8 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-body tracking-wide-label uppercase text-muted">
            Previously
          </p>
          <div className="mt-4">
            <Experience
              experience={{
                title: "Head of Engineering",
                company: "Swantide",
                url: "https://swantide.com",
              }}
            />
          </div>
          <div className="mt-4">
            <Experience
              experience={{
                title: "Engineering Manager",
                company: "LinkedIn",
                url: "https://www.linkedin.com",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
