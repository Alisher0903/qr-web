import React, { useEffect } from 'react';
import Heading from "../../components/heading.tsx";
import { Cards } from "../../components/index.tsx";
import img from '../../assets/img_1.png';
import img1 from '../../assets/img_2.png';
import img2 from '../../assets/img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Data for the card components
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
                <div className="mt-10" data-aos="fade-up">
                    <img src={img2} alt="qr img" className="w-full h-auto rounded-lg mb-4" />
                    <Cards
                        key={data[0].id}
                        imgSrc={""} 
                        title={data[0].name}
                        description={data[0].des}
                    />
                </div>
                <div className="mt-10" data-aos="fade-up">
                    <img src={img} alt="qr img" className="w-full h-auto rounded-lg mb-4" />
                    <Cards
                        key={data[1].id}
                        imgSrc={""}
                        title={data[1].name}
                        description={data[1].des}
                    />
                </div>
                <div className="mt-10" data-aos="fade-up">
                    <img src={img1} alt="qr img" className="w-full h-auto rounded-lg mb-4" />
                    <Cards
                        key={data[2].id}
                        imgSrc={""}
                        title={data[2].name}
                        description={data[2].des}
                    />
                </div>
            </div>
        </div>
    );
};

export default TelegramBot;
