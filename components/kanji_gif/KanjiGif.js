import Image from "next/image";

export const KanjiGif = ({kanji}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`https://raw.githubusercontent.com/jcsirot/kanji.gif/master/kanji/gif/150x150/${kanji}.gif`}
        width={100}
        height={100}
        className="rounded-md border-4 border-orange-500 shadow-md"
        alt="Kanji GIF animation"
      />

      <a
        className="text-xs font-bold font-english p-2 mt-2 rounded bg-transparent text-center underline"
        href={`/viewer?kanji=${kanji}`}
        target="_blank"
      >
        Check stroke information
      </a>
    </div>
  );
};
