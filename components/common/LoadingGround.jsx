import React from "react";
import {ImSpinner3} from 'react-icons/im';


export const LoadingGround = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {Array.from({ length: 10 }, (_, index) => index + 1).map((item, index) => {
        return (
          <div
            key={index}
            className={`bg-blue-50 relative font-primary-serif text-black p-5 rounded-md card min-w-[150px] lg:min-w-[200px] flex justify-center items-center shadow-md `}
          >
            <ImSpinner3 size={20} className="animate-spin"/>
          </div>
        );
      })}
    </div>
  );
};
