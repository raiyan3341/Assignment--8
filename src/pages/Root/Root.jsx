import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Header/Nabvar";
import Footer from "../../components/Footer/Footer";
import Loading from "../Loading/Loading";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Root = () =>{
  const navigation = useNavigation();
  const isNavLoading = navigation.state === "loading";

  return (
    <div className="max-w-[1240px] mx-auto min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-grow pt-20">
        {isNavLoading ? ( <div className="flex-grow min-h-[50vh] bg-white flex justify-center items-center">
            <Loading></Loading> 
          </div>) : (
          <>
            <ScrollToTop></ScrollToTop>
            <Outlet></Outlet>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;