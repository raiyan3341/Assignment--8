import React from "react";

const App = ({ singleApp }) => {
  const { image, title, downloads, ratingAvg } = singleApp;

  return (
    <div className="bg-white shadow-md rounded p-4 flex flex-col items-center">
      {/* App Image */}
      <img
        className="w-40 h-40 object-cover mb-2 rounded"
        src={image}
        alt={title}
      />

      {/* App Title */}
      <h3 className="font-semibold text-center">{title}</h3>

      {/* Downloads & Rating */}
      <div className="flex justify-between w-full mt-2 text-sm text-gray-600">
        <span>{downloads.toLocaleString()} Downloads</span>
        <span>⭐ {ratingAvg}</span>
      </div>
    </div>
  );
};

export default App;
