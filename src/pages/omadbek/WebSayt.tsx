import Heading from '../../components/heading';
import qrApp from "../../assets/qr-section18.avif";
import { Cards } from '../../components';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        name: 'Intuitiv interfeys',
        des: "Foydalanuvchilar uchun sodda va tushunarli interfeys."
    },
    {
        id: 2,
        name: "To'lovlarni boshqarish",
        des: "To'lovlarni va operatsiyalarni qulay boshqarish imkoniyatlari."
    },
    {
        id: 3,
        name: 'Keng funksionallik',
        des: "Hisobotlar yaratish va ma'lumotlarni tahlil qilish uchun keng imkoniyatlar."
    },
];

const WebSayt = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className={`max-container min-h-[90vh] flex flex-wrap lg:flex-nowrap items-center gap-10 py-10  md:px-10`}>
            <div className={`w-full lg:w-[40%] h-full mb-10 lg:mb-0`} data-aos="fade-up">
                <img src={qrApp} alt="people img" className={`w-full h-auto lg:h-full shadow-lg rounded-md`} />
            </div>
            <div className={`w-full lg:w-[60%] px-4`}>
                <div data-aos="fade-up">
                    <Heading text={`Veb-sayt`} />
                </div>
                {data.map(item => (
                    <div key={item.id} className={'flex items-start justify-start gap-7 mt-10'} data-aos="fade-up">
                        <div
                            className={'bg-lightGreen border border-green/80 flex justify-center items-center text-xl text-darkBlue rounded-md w-10 h-10 font-bold mt-1'}>
                            {item.id}
                        </div>
                        <Cards title={item.name} description={item.des} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebSayt;
