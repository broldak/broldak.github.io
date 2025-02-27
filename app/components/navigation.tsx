export default function Navbar() {
  return (
    <nav className="px-16 flex justify-center items-center">
      <ul className="py-8 h-100% w-full border-b-2 border-slate-500 flex justify-center gap-8">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  );
}
