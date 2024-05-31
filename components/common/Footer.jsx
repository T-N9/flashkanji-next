import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="flex max-w-[1440px] bg-white container mx-auto shadow-lg rounded-lg px-4 w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <div className="flex gap-3">
        <div>&copy; 2023 Flash Kanji by </div>

        <a
          className="text-orange-400 blue-600 font-bold"
          href="https://www.tenyain.com"
          target="_blank"
        >
          Te Nyain
        </a>
      </div>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li className={`${pathname === '/' && 'font-bold text-orange-500'}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`${pathname === '/kanji' && 'font-bold text-orange-500'}`}>
          <Link href={"/kanji"}>Kanji</Link>
        </li>
        <li className={`${pathname === '/quiz' && 'font-bold text-orange-500'}`}>
          <Link href={"/quiz"}>Quiz</Link>
        </li>
        <li className={`${pathname === '/jukugo' && 'font-bold text-orange-500'}`}>
          <Link href={"/jukugo"}>Jukugo</Link>
        </li>
        <li className={`${pathname === '/contribute' && 'font-bold text-orange-500'}`}>Contribute</li>
        <li className={`${pathname === '/contact-us' && 'font-bold text-orange-500'}`}>Contact Us</li>
      </ul>
    </footer>
  );
}
