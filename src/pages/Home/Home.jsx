import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Apps from "../Apps/Apps";

const Home = () =>{
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleShowMore = () =>{
    navigate("/apps");
  };

  return (
    <div>
      <Banner></Banner>
      <Apps data={data} showMoreHandler={handleShowMore} />
    </div>
  );
};

export default Home;
