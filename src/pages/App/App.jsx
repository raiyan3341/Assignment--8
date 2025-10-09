import React from "react";

const App = ({ singleApp }) =>{
  const { image, title, downloads, ratingAvg } = singleApp;

  return (
    <div className=" bg-white w-full h-60 md:w-full max-h-80 shadow-md rounded p-4 flex flex-col items-center">
      <img className="w-20 h-20 md:w-40 md:h-40 object-cover mb-2 rounded" src={image} alt={title}/>
      <h3 className="font-semibold text-center">{title}</h3>
      
      <div className="flex justify-between w-full mt-2 text-sm text-gray-600">
        <span>{downloads.toLocaleString()} Downloads</span>
        <span>⭐ {ratingAvg}</span>
      </div>
    </div>
  );
};

export default App;
