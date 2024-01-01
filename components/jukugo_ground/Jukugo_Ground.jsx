import Hook from "./hook";

import { JukugoSetting } from "./JukugoSetting";
import JukugoCard from "../jukugo_card/JukugoCard";

export const Jukugo_Ground = () => {
  const { jukugo } = Hook();

  return (
    <section className="relative flex bg-light min-h-screen flex-col items-center p-4">
      <JukugoSetting />
      <div className="relative transition-all duration-200 ease-out container w-full flex flex-col items-center p-3">
        <div
          className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`}
        >
          {jukugo?.map((item, index) => {
            return <JukugoCard key={index} item={item} />;
          })}
        </div>
      </div>
    </section>
  );
};
