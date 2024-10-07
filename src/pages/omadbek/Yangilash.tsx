import Heading from '../../components/heading';
import qrApp from "../../assets/progress-section23.avif";
import img from "../../assets/img.png";
import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.png";
import { Cards } from '../../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const data = [
    {
        id: 1,
        img: img,
        name: 'Muntazam yangilanishlar',
        des: "Yangi xususiyatlar va xavfsizlik kamchiliklari bartaraf etilgan holda muntazam ravishda yangilanishlar taqdim etiladi."
    },
    {
        id: 2,
        img: img1,
        name: "Avtomatik o'rnatish",
        des: "Foydalanuvchilar uchun sezilmagan holda yangilanishlar avtomatik ravishda o'rnatiladi."
    },
    {
        id: 3,
        img: img2,
        name: 'Qayta aloqa',
        des: "Foydalanuvchilardan yangi g'oyalar va takliflarni qabul qilish orqali tizimni doimiy ravishda takomillashtirish."
    },
];

const Yangilash = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className={`max-container min-h-[90vh] flex flex-col lg:flex-row items-center gap-10 py-10`}>
            <div className={`w-full lg:w-[60%] p-4`}>
                <div data-aos="fade-up">
                    <Heading text={`Tizimni yangilash`} />
                </div>
                {data.map(item => (
                    <div key={item.id} className={'flex items-start justify-start gap-7 mt-10'} data-aos="fade-up">
                        <div className='mt-10 justify-center items-center'>
                            <img src={item.img} alt="" className="transform rotate-90 w-full h-20 md:w-60 md:h-24 " />
                        </div>
                        <Cards title={item.name} description={item.des} />
                    </div>
                ))}
            </div>
            <div className={`w-full lg:w-[40%] h-full`} data-aos="fade-up">
                <img src={qrApp} alt="people img" className={`w-full h-full shadow-lg rounded-md`} />
            </div>
        </div>
    );
};

export default Yangilash;
