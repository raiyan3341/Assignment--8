import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ToastContainer,toast } from 'react-toastify';

const InstalledApps = () =>{
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOption, setSortOption] = useState("none");

  useEffect(() =>{
    const storedApps = localStorage.getItem("installedApps");
    if (storedApps) {
      setInstalledApps(JSON.parse(storedApps));
    }
  }, []);

  const handleUninstall = (appId) =>{
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.warning("App has been uninstalled!");
  };

  const sortedApps = useMemo(() =>{
    if (sortOption === "none") return installedApps;
    const sortableApps = [...installedApps];
    sortableApps.sort((a, b) =>{
      const [criteria, order] = sortOption.split("-");
      let comparison = 0;
      if (criteria === "downloads") comparison = a.downloads - b.downloads;
    return order === "lowToHigh" ? comparison : -comparison;
    });

    return sortableApps;
  }, 
  [installedApps, sortOption]);

  const handleSortChange = (e) =>{
    setSortOption(e.target.value);
  };

  return (
    <div className="max-w-[1240px] mx-auto mt-10 px-4">
      <div className="text-center  mb-10">
        <h2 className="text-4xl font-bold text-[#001931]">Your Installed Apps</h2>
        <p className="text-[#627382]">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-b-2 border-gray-200">
        <p className="font-bold text-[#001931]">{installedApps.length} Apps Found</p>

        <select className="border border-gray-300 rounded-md p-1 text-sm" value={sortOption} onChange={handleSortChange}>
        <option value="none">Sort By Downloads</option>
          <option value="downloads-highToLow"> High to Low</option>
          <option value="downloads-lowToHigh"> Low to High</option>
      </select>
      </div>

      <div className="mt-5 space-y-4">
        {sortedApps.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-gray-500">No Apps Installed Yet.</h3>
            <Link to="/apps" className="text-purple-600 mt-2 inline-block hover:underline">
              Browse Apps
            </Link>
          </div> ) : (
            sortedApps.map((app) =>(
            <div key={app.id} className="bg-white shadow-sm rounded-lg p-4 flex items-center justify-between border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-md flex-shrink-0">
                  <img src={app.image || "https://placehold.co/64x64/E0E0E0/333333?text=App"} alt={app.title} className="w-full h-full object-cover rounded-md"/>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{app.title}</h4>
                  <p className="text-sm text-gray-500">
                    <span className="mr-3">⬇️ {app.downloads ? app.downloads.toLocaleString() : "N/A"}M</span>
                    <span className="mr-3">⭐ {app.ratingAvg || "N/A"}</span>
                    <span>{app.size || "N/A"} MB</span>
                  </p>
                </div>
              </div>
              <button onClick={() => handleUninstall(app.id)} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-medium transition duration-200">Uninstall</button>
          </div>
          ))
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default InstalledApps;
