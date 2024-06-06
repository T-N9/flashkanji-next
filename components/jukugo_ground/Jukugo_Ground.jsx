import useContainer from "./useContainer";

import { JukugoSetting } from "./JukugoSetting";
import JukugoCard from "../jukugo_card/JukugoCard";
import { LoadingGround } from "../common/LoadingGround";
import { SpeedDialMenu } from "../common/SpeedDialMenu";

import AdsComponent from "../adsComponent/AdsComponent";

export const Jukugo_Ground = () => {
  const { jukugo, isLoading } = useContainer();

  return (
    <section className="relative flex min-h-screen flex-col items-center md:p-4">
      {/* <div className="my-5 w-full h-[100px]">
        <AdsComponent
          isDisplay={false}
          layoutKey="-f9+5v+4m-d8+7b"
          slotId={"1053749028"}
        />
      </div> */}
      <JukugoSetting />
      <div className="flex w-full justify-center px-4 lg:px-0 gap-4">
        <div className="w-[300px] hidden lg:block">
          <AdsComponent isDisplay={true} slotId={"7647610361"} />
        </div>
        {isLoading ? (
          <LoadingGround mode={2} />
        ) : (
          <div
            className={`grid w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-[720px]`}
          >
            {jukugo?.map((item, index) => {
              return <JukugoCard key={index} item={item} />;
            })}
          </div>
        )}
        <div className="w-[300px] hidden lg:block">
          <AdsComponent isDisplay={true} slotId={"7647610361"} />
        </div>
      </div>
      <div className="my-5 w-full">
        <AdsComponent
          isDisplay={false}
          layoutKey="-f9+5v+4m-d8+7b"
          slotId={"1053749028"}
        />
      </div>
      <SpeedDialMenu mode={2} />
    </section>
  );
};
