import React from 'react';
import errorpng from '../../assets/App-Error.png'

const ErrorPage = () =>{
    return (
        <div className="text-center items-center py-20">
              <img className="w-90 mx-auto" src={errorpng} alt="" />
              <h2 className="text-4xl mt-5 font-bold text-[#001931]">Oops, page not found!</h2>
              <p className="text-gray-500 mt-5">The page you are looking for is not available.</p>
              <button className=" mt-5 btn bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">Go Back!</button>
            </div>
    );
};

export default ErrorPage;