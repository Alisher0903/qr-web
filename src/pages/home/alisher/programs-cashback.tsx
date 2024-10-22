import Heading from "../../../components/heading.tsx";
import img from '../../../assets/linerGradiant-section10.avif';
import { Cards } from "../../../components";
import { FaGifts } from "react-icons/fa";
import { MdCreditCard } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const data = [
    {
        id: 1,
        img: <FaGifts className='text-3xl text-green' />,
        name: 'Bonus dasturlari',
        des: 'Mijozlarni rag\'batlantirish va jalb qilish uchun bonus dasturlarini ishga tushirish.'
    },
    {
        id: 2,
        img: <MdCreditCard className='text-3xl text-green' />,
        name: 'Cashback',
        des: 'QR-kod orqali to\'lovlar uchun cashback taqdim etib, mijozlarga qo\'shimcha foyda berish.'
    },
    {
        id: 3,
        img: <IoMdNotifications className='text-3xl text-green' />,
        name: 'Bildirishnomalar',
        des: 'Mijozlarni bonuslar va cashback haqida xabardor qilish uchun bildirishnomalar yuborish.'
    },
];

const ProgramsCashback = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="max-container min-h-[100vh] flex flex-col lg:flex-row items-center gap-8 py-10">
            <div className="w-full lg:w-1/2 h-full" data-aos="fade-up">
                <img src={img} alt="Loyalty Programs" className="w-full h-full shadow-lg rounded-md" />
            </div>
            <div className="w-full lg:w-1/2 p-4">
                <div data-aos="fade-up">
                    <Heading text="Loyallik dasturlari va cashback" />
                </div>
                {data.map(item => (
                    <div key={item.id} className="mt-6" data-aos="fade-up">
                        <Cards isIcon imgSrc={item.img} title={item.name} description={item.des} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramsCashback;
