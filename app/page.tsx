import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[100dvh] flex-col items-center justify-between p-16">
      <div className="flex flex-col flex-1 z-10 min-h-full max-w-5xl w-full items-center justify-center">
        <h1 className="font-bold text-4xl text-center text-slate-900 dark:text-white">
          Hello, I'm Brian
        </h1>
        <p className="mt-2 text-center">
          I'm a{" "}
          <a href="https://github.com/broldak" target="_blank">
            software engineer
          </a>
          ,{" "}
          <a href="https://www.strava.com/athletes/11417793" target="_blank">
            cyclist
          </a>
          , and karaoke enthusiast
        </p>

        <div className="max-sm:min-w-[320px] min-w-[480px] h-[0.5px] bg-white mt-8 mb-8"></div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>

          <p className="text-xs">CURRENTLY</p>
          <h3 className="text-lg">
            Engineering Manager @{" "}
            <a
              href="https://www.linkedin.com/company/swantide/"
              target="_blank"
            >
              Swantide
            </a>
          </h3>

          <p className="mt-4 text-xs">PREVIOUSLY</p>
          <h3 className="text-lg">
            Engineering Manager @{" "}
            <a
              href="https://www.linkedin.com/company/linkedin/"
              target="_blank"
            >
              LinkedIn
            </a>
          </h3>
        </div>
      </div>
    </main>
  );
}
