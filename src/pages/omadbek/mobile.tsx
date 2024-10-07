import Heading from '../../components/heading';
import qrApp from "../../assets/qr-section17.avif";
import { Cards } from '../../components';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Mobile = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);
    return (
        <div className={`max-container min-h-[80vh] flex flex-wrap lg:flex-nowrap items-center gap-10 py-10 md:px-10`}>
            <div className={`w-full lg:w-[60%] px-4`}>
                <div data-aos="fade-up">
                <Heading text={`Mobil ilovalar`} />
                </div>
                <div className='bg-lightGreen p-4 mt-4 rounded-lg' data-aos="fade-up">
                    <Cards
                        title='iOS platforma'
                        description='Apple qurilmalari uchun moʻljallangan maxsus ilova.'
                    />
                </div>
                <div className='bg-lightGreen p-4 mt-4 rounded-lg' data-aos="fade-up">
                    <Cards
                        title='Android platforma'
                        description='Android qurilmalari uchun moʻljallangan maxsus ilova.'
                    />
                </div>
                <div className='bg-lightGreen p-4 mt-4 rounded-lg'data-aos="fade-up">
                    <Cards
                        title='Funksionallik'
                        description='Foydalanuvchi hisoblarini va toʻlovlarni boshqarish imkoniyatlarini taqdim etadi.'
                    />
                </div>
            </div>
            <div className={`w-full lg:w-[50%] mt-10 lg:mt-0 overflow-hidden shadow-lg rounded-md`} data-aos="fade-up">
                <img src={qrApp} alt="qr img" className={`w-full h-auto lg:h-full`} />
            </div>
        </div>
    );
};

export default Mobile;
