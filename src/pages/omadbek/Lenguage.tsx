import { useEffect } from "react";
import { Cards } from "../../components";
import Heading from "../../components/heading";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        name: 'Tilni tanlash',
        des: 'Foydalanuvchilar istalgan tilni tanlash imkoniyatiga ega.'
    },
    {
        id: 2,
        name: 'Avtomatik tarjima',
        des: 'Interfeys va xabarlar avtomatik ravishda tarjima qilinadi.'
    },
    {
        id: 3,
        name: 'Mahalliylashtirish',
        des: 'Har bir bozor uchun maxsus moslashtirilgan kontent taqdim etiladi.'
    },
];

const Lenguage = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className="max-container py-10 p-4">
            <div data-aos="fade-up">
                <Heading text="Ko'p tilli qo'llab-quvvatlash" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {data.map(({ id, name, des }) => (
                    <div data-aos="fade-up">
                        <Cards
                            key={id}
                            imgSrc={""}
                            title={name}
                            description={des}
                        /></div>

                ))}
            </div>
        </div>
    );
};

export default Lenguage;
