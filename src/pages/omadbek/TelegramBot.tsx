
import Heading from "../../components/heading.tsx";
import { Cards } from "../../components/index.tsx";
import img from '../../assets/img_1.png';
import img1 from '../../assets/img_2.png';
import img2 from '../../assets/img.png';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        name: 'Tezkor buyruqlar',
        des: "Foydalanuvchilar Telegram orqali tezkor buyruqlarni yuborish imkoniyatiga ega."
    },
    {
        id: 2,
        name: "To'lovlarni boshqarish",
        des: "Telegram orqali to'lovlarni boshqarish imkoniyatini taqdim etadi."
    },
    {
        id: 3,
        name: "Ma'lumot olish",
        des: "Tranzaksiyalar va hisobotlar haqida ma'lumot olish imkoniyati mavjud."
    },
];

const TelegramBot: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="flex justify-center items-center bg-bgDarkBlue w-full min-h-screen p-4 md:p-10">
            <div className="w-full md:w-[90%] lg:w-[80%] h-auto bg-white p-6 md:p-12 rounded-xl shadow-lg">
                <div data-aos="fade-up">
                    <Heading text={'Telegram-bot'} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" data-aos="fade-up">
                    <img src={img2} alt="qr img" className="w-full h-auto rounded-lg" />
                    <img src={img} alt="qr img" className="w-full h-auto rounded-lg" />
                    <img src={img1} alt="qr img" className="w-full h-auto rounded-lg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" data-aos="fade-up">
                    {data.map(({ id, name, des }) => (
                        <Cards
                            key={id}
                            imgSrc={""}
                            title={name}
                            description={des}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TelegramBot;
