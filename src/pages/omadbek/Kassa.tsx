import { useEffect } from "react";
import { Cards } from "../../components";
import Heading from "../../components/heading";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        name: 'Smartfon orqali',
        des: "To'lovlarni qabul qilish uchun oddiy smartfondan foydalaning."
    },
    {
        id: 2,
        name: 'Karta qabul qilish',
        des: "Kontaktsiz kartalarni qabul qilish imkoniyatiga ega bo'ling."
    },
    {
        id: 3,
        name: 'Chek chop etish',
        des: "Mobil printer yordamida chekni chop eting."
    },
];

const Kassa = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className="max-container p-4">
            <div data-aos="fade-up">
                <Heading text="Mobil kassa" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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

export default Kassa;
