import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-[50vh]"> 
      <div className="flex flex-col items-center space-y-3">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-300 border-t-[rgba(99,46,227,1)]"></div>
        <p className="text-xl font-semibold text-[#627382]">Loading Content...</p>
      </div>
    </div>
  );
};

export default Loading;