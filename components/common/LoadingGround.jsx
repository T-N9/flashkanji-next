import React from "react";
import { ImSpinner3 } from "react-icons/im";

export const LoadingGround = ({ mode }) => {
  /* mode 1 = flash ground
     mode 2 = jukugo ground
  */
  return (
    <>
      {mode === 1 && (
        <div className="grid lg:max-w-[1280px] w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Array.from({ length: 10 }, (_, index) => index + 1).map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-orange-50 relative font-primary-serif text-dark p-5 rounded-md card min-w-[150px] lg:min-w-[200px] flex justify-center items-center shadow-md `}
                >
                  <ImSpinner3 size={40} className="animate-spin" />
                </div>
              );
            }
          )}
        </div>
      )}
      {mode === 2 && (
        <div className="grid lg:max-w-[1280px] w-full grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }, (_, index) => index + 1).map(
            (item, index) => {
              return (
                <div
                  key={index}
                  className={`bg-orange-50 relative font-primary-serif p-5 text-dark rounded-md card min-w-[150px] lg:min-w-[200px] flex justify-center items-center shadow-md `}
                >
                  <ImSpinner3 size={40} className="animate-spin " />
                </div>
              );
            }
          )}
        </div>
      )}
    </>
  );
};
