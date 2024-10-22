import Heading from "../../../components/heading.tsx";
import { Cards } from "../../../components";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const data = [
    {
        name: 'Joylashuvni belgilash',
        des: 'Savdogarlar o\'z bizneslarining joylashuvini tizimga kiritish imkoniyatiga ega.'
    },
    {
        name: 'Yaqin savdo nuqtalarini topish',
        des: 'Xaridorlar yaqin atrofdagi savdo nuqtalarini osongina topishlari mumkin.'
    },
    {
        name: 'QR-kod orqali to\'lov',
        des: 'Topilgan joylarda QR-kod orqali qulay va tez to\'lovni amalga oshirish mumkin.'
    }
]

const LocationPayment = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className={'py-10 min-h-[70vh] bg-green flex items-center'}>
            <div className={'max-container p-4'}>
                <div data-aos="fade-up">
                    <Heading size={'text-xl md:2xl lg:3xl'} text={'Geolokatsiya asosida to\'lovlar'} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {data.map((d, idx) => (
                        <div data-aos="fade-up" key={idx}>
                            <Cards imgStyle={'w-full'} title={d.name} description={d.des} />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationPayment;
