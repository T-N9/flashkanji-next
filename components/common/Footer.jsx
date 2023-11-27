import { Typography } from "@material-tailwind/react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex bg-white container mx-auto shadow-lg rounded-lg px-4 w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2023 Flash Kanji by{" "}
        <a
          className="text-blue-600 font-bold"
          href="https://www.tenyain.com"
          target="_blank"
        >
          Te Nyain
        </a>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link href={"/"}>
            <Typography
              href="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </Link>
        </li>
        <li>
          <Link href={"/quiz"}>
            <Typography
              href="/quiz"
              color="blue-gray"
              className="rainbow-text font-extrabold drop-shadow-lg transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Quiz
            </Typography>
          </Link>
        </li>
        <li>
          <Typography
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}
