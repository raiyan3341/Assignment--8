import React from "react";
import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import downloadimg from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { ToastContainer,toast } from 'react-toastify';


const AppDetails = () =>{
  const { id } = useParams();
  const data = useLoaderData();
  const app = data.find((item) => item.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() =>{
    const installedAppsJson = localStorage.getItem("installedApps");
    const installedApps = installedAppsJson ? JSON.parse(installedAppsJson) : [];
    const installed = installedApps.some((a) => a.id === app.id);
    setIsInstalled(installed);
  }, [app?.id]);

  const handleInstall = () =>{
    const installedAppsJson = localStorage.getItem("installedApps");
    const installedApps = installedAppsJson ? JSON.parse(installedAppsJson) :[];
    if (!installedApps.some((a) => a.id === app.id)){
      const updatedApps = [...installedApps, app];
      localStorage.setItem("installedApps", JSON.stringify(updatedApps));
      setIsInstalled(true);
      toast.success(`${app.title} successfully installed!`);
    } 
    else{
      toast.info(`${app.title} is already installed.`);
    }
  };

  if (!app) return  <h2 className="text-center text-2xl font-bold mt-29">App is Not Found <br /> <br /> <span className="font-normal text-gray-500">The app you are looking for does not exist or has been removed</span></h2>;

  const sortedRatings = [...app.ratings].sort((a, b) =>{
    const ratingA = parseInt(a.name.split(' ')[0]);
    const ratingB = parseInt(b.name.split(' ')[0]);
    return ratingB - ratingA; 
  });

  return (
    <div className="max-w-[1000px] mx-auto mt-10 bg-white shadow-md rounded-xl p-8">
      <div className="flex flex-col md:flex-row gap-10">
        <img src={app.image} alt={app.title} className="items-center w-full object-cover md:w-70 h-56 rounded-lg " />
        <div>
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-500 font-medium mt-2">Developed by <span className="bg-clip-text text-transparent bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] ">{app.companyName}</span></p>
          <div className="border-b-4 border-b-gray-300 w-full mt-7"></div>
          
          <div className="grid grid-cols-3 gap-4 p-4 rounded-md mt-6">
            <div className="items-center ">
              <img className="w-8 h-8" src={downloadimg} alt="Downloads" />
              <p>Downloads <br /> <strong className="font-bold text-2xl">{app.downloads.toLocaleString()}</strong></p>
            </div>
            <div>
              <img className="w-8 h-8" src={rating} alt="Average Rating" />
              <p>Average Rating <br /> <span className="font-bold text-2xl">⭐{app.ratingAvg}</span></p>
            </div>

            <div>
              <img className="w-8 h-8" src={review} alt="Total Reviews" />
              <p>Total Reviews <br /> <span className="font-bold text-2xl">{app.reviews.toLocaleString()}</span></p>
            </div>
          </div>
          
          <button onClick={handleInstall} disabled={isInstalled} className={`px-5 py-2 rounded-md font-medium ${
            isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"
          }`}>
          {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
        </button>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-2">Ratings</h3>
      <div className="space-y-2">
        {sortedRatings.map((r) =>( 
          <div key={r.name} className="flex items-center">
            <p className="w-16">{r.name}</p>
            <div className="bg-gray-200 h-3 w-full rounded">
              <div className="bg-orange-500 h-3 rounded" style=
              {{ width: `${(r.count / app.reviews) * 100}%` 
                }}>
                </div>
            </div>
            <p className="ml-3 text-sm">{r.count}</p>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-3">Description</h3>
      <p className="text-gray-700 leading-relaxed">{app.description}</p>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;