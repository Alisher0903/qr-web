import Heading from "../../components/heading.tsx";
import { Cards } from "../../components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const data = [
    {
        id: 1,
        name: 'Maxsus QR-kodlar',
        des: 'Abonement xizmatlarini QR-kod orqali qulay toʻlash imkoniyatini yaratish.'
    },
    {
        id: 2,
        name: 'Avtomatik toʻlovlar',
        des: 'Muntazam toʻlovlarni avtomatlashtirish orqali vaqtni tejash.'
    },
    {
        id: 3,
        name: 'Boshqarish',
        des: 'Abonementlar va muntazam toʻlovlarni samarali boshqarish va tahlil qilish.'
    },
];

const SubscriptionPayments = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="flex justify-center items-center bg-bgDarkBlue w-full min-h-screen">
            <div className="w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] h-auto bg-white p-6 md:p-10 lg:p-12 rounded-xl shadow-lg">
                <div data-aos="fade-up">
                    <Heading size="lg:text-5xl" text="Abonement va muntazam toʻlovlar" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-8">
                    {data.map(item => (
                        <div key={item.id} className="flex items-start justify-start gap-4 md:gap-6" data-aos="fade-up">
                            <div className="bg-lightGreen border border-green/80 flex justify-center items-center text-xl text-darkBlue rounded-md w-12 h-12 md:w-10 md:h-10 font-bold mt-1">
                                {item.id}
                            </div>
                            <Cards title={item.name} description={item.des} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPayments;
