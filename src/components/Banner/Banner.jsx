import React from 'react';
import heroimage from '../../assets/hero.png';
import googleplay from '../../assets/pngwing.com.png';
import appstore from '../../assets/pngwing.com (1).png'

const Banner = () => {
    return (
        <div>
            <div className='text-center space-y-6 my-10 px-4 sm:px-0'>
         <h1 className='text-4xl sm:text-6xl font-bold text-[#001931]'>We Build <br /> <span className='bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent'>Productive</span> Apps</h1>
          <p className='text-[#627382] px-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden sm:block' />Our goal is to turn your ideas into digital experiences that truly make an impact.
         </p>
        </div>
            <div className='flex justify-center gap-5 mb-10 font-bold '>
                <a href="https://play.google.com/store/games?hl=en"> <button  className=' flex items-center gap-2 border border-[#cfcfcf] text-[#001931] py-2 px-4 rounded'> <span><img className='w-8' src={googleplay} alt="" /></span>Google Play</button></a>
                <a href="https://www.apple.com/app-store/"> <button className=' flex items-center gap-2 border border-[#cfcfcf] text-[#001931] py-2 px-4 rounded'> <span><img className='w-8' src={appstore} alt="" /></span>App Store</button></a>
            </div>

            <img className='mx-auto' src={heroimage} alt="Hero" />

            <div className='max-w-[1240px] h-[320px] mx-auto bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] '>

                <p className='text-center text-white py-4 text-3xl font-bold py-12'>Trusted by Millions, Built for You</p>
                <div className='grid grid-cols-3 text-center text-white gap-5 px-10'>
                    <p>Total Downloads</p>
                    <p>Total Reviews</p>
                    <p>Active Apps</p>
                </div>
                <div className='grid grid-cols-3 text-center text-white gap-5 text-4xl font-bold py-4 px-10'>
                    <h1>29.6M</h1>
                    <h1>906K</h1>
                    <h1>132+</h1>
                </div>
                <div className='grid grid-cols-3 text-center text-white gap-5 px-10'>
                    <p>21% more than last month</p>
                    <p>46% more than last month</p>
                    <p>31 more will Launch</p>
                </div>

            </div>
            
        </div>
    );
};

export default Banner;