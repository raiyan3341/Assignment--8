import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InstalledApps = () => {
   
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const storedApps = localStorage.getItem('installedApps');
        if (storedApps) {
            setInstalledApps(JSON.parse(storedApps));
        }
    }, []);


    const handleUninstall = (appId) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    };

    return (
        <div className='w-[1240px] mx-auto mt-10 min-h-screen'>
            <div className='text-center space-y-2 mb-10'>
                <h2 className='text-4xl font-bold text-[#001931]'>Your Installed Apps</h2>
                <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
            <div className='flex justify-between items-center px-4 py-2 border-b-2 border-gray-200'>
                <p className='font-bold text-[#001931]'>{installedApps.length} Apps Found</p>
                <select className='border border-gray-300 rounded-md p-1 text-sm'>
                    <option>Sort By Size</option>
                    <option>Sort By Name</option>
                </select>
            </div>

            <div className='mt-5 space-y-4'>
                {installedApps.length === 0 ? (
                    <div className='text-center py-20'>
                        <h3 className='text-2xl font-semibold text-gray-500'>No Apps Installed Yet.</h3>
                        <Link to="/apps" className="text-purple-600 mt-2 inline-block hover:underline">
                            Browse Apps
                        </Link>
                    </div>
                ) : (
                    installedApps.map((app) => (
                        <div key={app.id} className='bg-white shadow-sm rounded-lg p-4 flex items-center justify-between border border-gray-200'>
                            <div className='flex items-center space-x-4'>
                                
                                <div className='w-16 h-16 bg-gray-200 rounded-md flex-shrink-0'>
                                    <img src={app.image} alt={app.title} className='w-full h-full object-cover rounded-md' />
                                </div>
                                <div>
                                    <h4 className='font-semibold text-lg'>{app.title}</h4>
                                    <p className='text-sm text-gray-500'>
                                        <span className='mr-3'>⬇️ {app.downloads.toLocaleString()}M</span>
                                        <span className='mr-3'>⭐ {app.ratingAvg}</span>
                                        <span>{app.size} MB</span>
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default InstalledApps;