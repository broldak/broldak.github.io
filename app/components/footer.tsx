import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 relative z-10 px-8 lg:px-16">
      <div className="max-w-5xl mx-auto py-12">
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
      </div>
    </footer>
  );
}
