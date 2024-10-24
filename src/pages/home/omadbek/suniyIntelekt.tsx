import Heading from "../../../components/heading.tsx";
import { Cards } from "../../../components";
import img1 from '../../../assets/main-components/img1.avif'
import img2 from '../../../assets/main-components/img2.avif'
import img3 from '../../../assets/main-components/img3.avif'
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        img: img1,
        name: 'Tahlil',
        des: 'Foydalanuvchilarga chuqur tahlil qilish imkoniyatini taqdim etadi.'
    },
    {
        id: 2,
        img: img2,
        name: 'Prognozlash',
        des: 'Kelajakdagi savdo tendentsiyalarini bashorat qilish imkoniyatini beradi.'
    },
    {
        id: 3,
        img: img3,
        name: 'Strategiya',
        des: 'Savdogarlar o\'z savdo strategiyalarini yaxshilash uchun foydalanishlari mumkin.'
    },

]

const SuniyIntelekt = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className={`max-container min-h-[60vh] py-10 p-4`}>
            <div data-aos="fade-up">
                <Heading text={`Sun'iy intellekt (AI) moduli`} />
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-12`} >
                {data.map(item => (
                    <div data-aos="fade-up" key={item.id}>
                        <Cards
                        imgSrc={item.img}
                        title={item.name}
                        description={item.des}
                        key={item.id}
                    />
                    </div>
                    
                ))}
            </div>
        </div>
    );
};

export default SuniyIntelekt;
