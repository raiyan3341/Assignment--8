import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import App from "../App/App";
import Loading from "../Loading/Loading";
import NotFound from "../NotFound/NotFound";

const AllApps = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
  };

  const filteredData = data.filter((app) =>
    app.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="max-w-[1240px] mx-auto mt-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#001931]">Our All Applications</h2>
      <p className="text-center mt-5 text-[#627382] px-4">Explore All Apps on the Market developed by us. We code for Millions</p>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-10 space-y-4 sm:space-y-0">
        <p className="font-bold text-lg sm:ml-10 text-[#001931]">({filteredData.length}) Apps Found </p>
        <input className="border border-gray-300 rounded-md p-1 w-80" type="search" placeholder="Search Apps..." value={searchTerm} onChange={handleSearch} />
      </div>

      {loading ? ( <Loading />) : filteredData.length === 0 ? (
        <NotFound /> ) : ( <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-6">
        {filteredData.map((singleApp) =>(
            <Link to={`/app/${singleApp.id}`} key={singleApp.id}>
              <App singleApp={singleApp} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllApps;
