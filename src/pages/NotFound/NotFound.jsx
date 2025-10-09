import React from "react";
import foundimg from '../../assets/App-Error.png'

const NotFound = () =>{
  return (
    <div className="text-center items-center py-20">
      <img className="w-90 mx-auto" src={foundimg} alt="" />
      <h2 className="text-4xl mt-5 font-bold text-[#001931]">OPPS!! APP NOT FOUND</h2>
      <p className="text-gray-500 mt-5">The App you are requesting is not found on our system.  please try another apps</p>
       <button className=" mt-5 btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">Go Back!</button>
    </div>
  );
};

export default NotFound;
