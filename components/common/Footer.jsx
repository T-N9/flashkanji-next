import Link from "next/link";

export function Footer() {
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
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/kanji"}>Kanji</Link>
        </li>
        <li>
          <Link href={"/quiz"}>Quiz</Link>
        </li>
        <li>
          <Link href={"/jukugo"}>Jukugo</Link>
        </li>
        <li>Contribute</li>
        <li>Contact Us</li>
      </ul>
    </footer>
  );
}
