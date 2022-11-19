import Link from 'next/link';
import {FaSun, FaMoon} from 'react-icons/fa'


export default function Intro() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return <nav className="flex justify-between py-10 items-center">
    <div className="flex items-center">
      {navLinks.map((link) => (
        <Link href={link.href} className="hover:text-white px-3.5 py-2 hover:bg-black hover:bg-opacity-25 active:bg-gray-200/75 rounded-md transition">{link.name}</Link>
      ))}

    </div>
    <div>
      <button>🌚</button>
    </div>
  </nav>;
}
