import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="px-8 flex justify-center items-center">
      <ul className="py-8 h-100% w-full flex justify-center gap-8">
        <li>
          <div className="relative w-10 h-10">
            <a className="w-full h-full block" href="https://github.com/broldak" target="_blank">
              <Image src="/github-mark-white.png" alt="LinkedIn" layout='fill'
      objectFit='contain' />
            </a>
          </div>
        </li>
        <li>
          <div className="relative w-10 h-10">
            <a className="w-full h-full block" href="https://www.linkedin.com/in/brianoldak" target="_blank">
              <Image src="/InBug-White.png" alt="LinkedIn" layout='fill'
      objectFit='contain' />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
