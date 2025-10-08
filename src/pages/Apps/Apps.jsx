import React from "react";
import { useNavigate, Link } from "react-router-dom"; 
import App from "../App/App";

const Apps = ({ data }) => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate("/apps"); 
  };

  return (
    <div className="w-[1240px] mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">Trending Apps</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {data.slice(0, 8).map((singleApp) => (
          <Link to={`/app/${singleApp.id}`} key={singleApp.id}> 
            <App singleApp={singleApp} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <button
          className="btn bg-purple-600 text-white"
          onClick={handleShowMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Apps;