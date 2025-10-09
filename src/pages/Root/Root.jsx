import React, { useState, useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Header/Nabvar";
import Footer from "../../components/Footer/Footer";
import Loading from "../Loading/Loading";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Root = () =>{
  const navigation = useNavigation();
  const [showLoader, setShowLoader] = useState(false);
  const isNavLoading = navigation.state === "loading";

  useEffect(() =>{
    let timer;
    if (isNavLoading){
      setShowLoader(false);
      timer = setTimeout(() => setShowLoader(true), 300);
    } 
    else{
      clearTimeout(timer);
      setShowLoader(false);
    }
    return () => clearTimeout(timer);
  }, 
  [isNavLoading]);

  return (
    <div className="max-w-[1240px] mx-auto min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-grow pt-20">
        {showLoader ? ( <Loading></Loading> ) : (
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
