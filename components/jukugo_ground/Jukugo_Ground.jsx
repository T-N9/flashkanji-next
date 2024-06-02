import useContainer from "./useContainer";

import { JukugoSetting } from "./JukugoSetting";
import JukugoCard from "../jukugo_card/JukugoCard";
import { LoadingGround } from "../common/LoadingGround";
import { SpeedDialMenu } from "../common/SpeedDialMenu";

export const Jukugo_Ground = () => {
  const { jukugo, isLoading } = useContainer();

  return (
    <section className="relative flex min-h-screen flex-col items-center md:p-4">
      <JukugoSetting />
      <div className="relative max-w-[1440px] transition-all duration-200 ease-out container w-full flex flex-col items-center p-3">
        {isLoading ? (
          <LoadingGround mode={2} />
        ) : (
          <div
            className={`grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4`}
          >
            {jukugo?.map((item, index) => {
              return <JukugoCard key={index} item={item} />;
            })}
          </div>
        )}
      </div>

      <SpeedDialMenu mode={2}/>
    </section>
  );
};
