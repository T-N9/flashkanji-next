import hook from "./hook";

/* components */
import FlashCard from "../flash_card/FlashCard";
import JukugoCard from "../jukugo_card/JukugoCard";

const FavouriteItems = () => {
  const { kanjiItems, jukugoItems } = hook();

  return (
    <section className="w-full container mx-auto my-5">
      <h1 className="text-3xl font-bold text-gray-400 mb-4">Your Favourite</h1>
      <h4 className="text-xl font-bold text-gray-600 mb-2">Kanjis</h4>
      <div
        className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4`}
      >
        {kanjiItems?.map((item, index) => (
          <FlashCard key={index} item={item} />
        ))}
      </div>

      <h4 className="text-xl font-bold text-gray-600 mb-2 mt-5">Jukugos</h4>
      <div
        className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`}
      >
        {jukugoItems?.map((item, index) => (
          <JukugoCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default FavouriteItems;
