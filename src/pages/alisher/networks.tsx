import Heading from "../../components/heading.tsx";
import { Cards } from "../../components";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    { name: 'QR-kodlarni ulashish', des: 'Savdogarlar QR-kodlarini ijtimoiy tarmoqlarda osongina ulasha olishadi.' },
    { name: 'To\'g\'ridan-to\'g\'ri to\'lov', des: 'Xaridorlar ulashilgan QR-kodlar orqali to\'lovlarni amalga oshirishlari mumkin.' },
    { name: 'Bot orqali yuborish', des: 'Telegram bot yordamida QR-kodlarni ijtimoiy tarmoqlarga osongina yuborish mumkin.' },
];

const Networks: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="flex justify-center items-center bg-bgDarkBlue w-full min-h-[100vh] p-2">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] h-auto bg-white p-8 sm:p-10 md:p-12 lg:p-16 rounded-xl">
                <div data-aos="fade-up">
                    <Heading size={'text-xl md:2xl lg:3xl'} text="Ijtimoiy tarmoqlar bilan integratsiya" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {data.map((d, index) => (
                        <div key={index} className="bg-lightGreen border border-green/70 rounded-md p-5" data-aos="fade-up">
                            <Cards title={d.name} description={d.des} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Networks;
