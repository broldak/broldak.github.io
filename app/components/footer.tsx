import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-band-slate">
      <div className="max-w-5xl mx-auto px-8 lg:px-16 py-12 flex items-center justify-between">
        <ul className="flex gap-6">
          <li>
            <a
              className="block"
              href="https://github.com/broldak"
              target="_blank"
            >
              <Image
                src="/github-mark-white.png"
                alt="GitHub"
                width={32}
                height={32}
              />
            </a>
          </li>
          <li>
            <a
              className="block"
              href="https://www.linkedin.com/in/brianoldak"
              target="_blank"
            >
              <Image
                src="/InBug-White.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted">Brian Oldak</p>
      </div>
    </footer>
  );
}
