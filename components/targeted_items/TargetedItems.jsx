import useContainer from "./useContainer";
import Link from "next/link";

/* components */
import FlashCard from "../flash_card/FlashCard";
import JukugoCard from "../jukugo_card/JukugoCard";

const TargetedItems = () => {
  const { kanjiItems, jukugoItems } = useContainer();

  return (
    <section className="bg-orange-50/50 py-5">
      <div className="w-full container mx-auto my-5">
        <h1 className="text-3xl font-bold text-gray-400 mb-4 text-center">
          Your Target
        </h1>
        <h4 className="text-xl font-bold text-gray-600 mb-2">Kanjis</h4>
        {kanjiItems?.length === 0 ? (
          <>
            <p>
              You have no targeted Kanjis.{" "}
              <Link className="text-orange-600 underline" href={"/kanji"}>
                Learn Kanji
              </Link>
            </p>
          </>
        ) : (
          <div
            className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4`}
          >
            {kanjiItems?.map((item, index) => (
              <FlashCard key={index} item={item} />
            ))}
          </div>
        )}

        <h4 className="text-xl font-bold text-gray-600 mb-2 mt-5">Jukugos</h4>
        {jukugoItems?.length === 0 ? (
          <>
            <p>
              You have no targeted Jukugos.
              <Link className="text-orange-600 underline" href={"/jukugo"}>
                Learn Jukugo
              </Link>
            </p>
          </>
        ) : (
          <div
            className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`}
          >
            {jukugoItems?.map((item, index) => (
              <JukugoCard key={index} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TargetedItems;
