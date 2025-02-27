import Experience from "./components/experience";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 z-10 min-h-full max-w-5xl w-full items-center justify-center">
      <h1 className="font-bold text-4xl text-center text-white">
        Hello, I'm Brian
      </h1>
      <p className="mt-2 text-center">
        I'm a{" "}
        <a href="https://github.com/broldak" target="_blank">
          software engineering manager
        </a>
        ,{" "}
        <a href="https://www.strava.com/athletes/11417793" target="_blank">
          cyclist
        </a>
        , and karaoke enthusiast
      </p>

      <div className="max-sm:min-w-[320px] min-w-[480px] h-[1px] bg-slate-500 mt-8 mb-8"></div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>

        <p className="text-xs">CURRENTLY</p>
        <div className="mt-2">
          <Experience experience={{ title: "Head of Engineering", company: "Swantide", url: "https://swantide.com" }} />
        </div>

        <p className="mt-8 text-xs">PREVIOUSLY</p>
        <div className="mt-2">
          <Experience experience={{ title: "Engineering Manager", company: "LinkedIn", url: "https://www.linkedin.com" }} />
        </div>

        <div className="mt-2">
          <Experience experience={{ title: "Staff Software Engineer", company: "LinkedIn", url: "https://www.linkedin.com" }} />
        </div>
      </div>
    </div>
  );
}
