import React, { useState, useEffect } from 'react';
import Nabvar from '../../components/Header/Nabvar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Loading from '../Loading/Loading'; 


const Root = () => {
    const navigation = useNavigation();
    const [showLoader, setShowLoader] = useState(false); 
    const isNavigationLoading = navigation.state === 'loading';

    // Loading transition ke beshi noticeable korar jonno delay use kora
    useEffect(() => {
        let startTimer;
        
        if (isNavigationLoading) {
            // Navigation state 'loading' hole 300ms pore loader show koro
            startTimer = setTimeout(() => {
                setShowLoader(true);
            }, 300); 
        } else {
            // Navigation state 'idle' hole shathe shathe loader lukano
            clearTimeout(startTimer);
            setShowLoader(false);
        }
        
        // Cleanup function
        return () => clearTimeout(startTimer);
    }, [isNavigationLoading]); 

    return (
        // max-w ebong min-h-screen diye layout ke stable kora holo
        <div className='max-w-[1240px] mx-auto min-h-screen flex flex-col'> 
            
            <Nabvar />

            {/* Main content area. Flex-grow diye eta Navbar o Footer er majher shob jaiga nebe */}
            <main className='flex-grow'>
                {/* Jodi showLoader true hoy, tokhon shudhu Loading dekhabe */}
                {showLoader ? (
                    <Loading />
                ) : (
                    // Loading na thakle Outlet theke content load hobe
                    <Outlet />
                )}
            </main>
            
            <Footer />
        </div>
    );
};

export default Root;