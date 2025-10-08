import React, { useState, useEffect } from 'react';
import Nabvar from '../../components/Header/Nabvar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Loading from '../Loading/Loading'; 


const Root = () => {
    const navigation = useNavigation();
    const [showLoader, setShowLoader] = useState(false);
    const isNavigationLoading = navigation.state === 'loading';

    useEffect(() => {
        let startTimer;
        
        if (isNavigationLoading) {
            // নেভিগেশন শুরু হলে, লোডারটি দেখানোর আগে 400ms ডিলে সেট করা হলো।
            startTimer = setTimeout(() => {
                setShowLoader(true);
            }, 400); 
        } else {
            // নেভিগেশন শেষ হলে সাথে সাথে লোডার লুকিয়ে ফেলা।
            clearTimeout(startTimer);
            setShowLoader(false);
        }
        
        // ক্লিনআপ ফাংশন: টাইমারটি বাতিল করা।
        return () => clearTimeout(startTimer);
    }, [isNavigationLoading]); 

    return (
        <div className='w-[1240px] mx-auto'>
            {/* showLoader true হলে Loading কম্পোনেন্ট দেখাবে */}
            {showLoader && <Loading />} 

            <Nabvar></Nabvar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
