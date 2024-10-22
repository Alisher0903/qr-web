import Heading from '../../../components/heading.tsx';
import qrApp from "../../../assets/secure-section21.avif";
import { Cards } from '../../../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const data = [
    {
        id: 1,
        name: 'Tahlil',
        des: 'Foydalanuvchilarga chuqur tahlil qilish imkoniyatini taqdim etadi.'
    },
    {
        id: 2,
        name: 'Prognozlash',
        des: 'Kelajakdagi savdo tendentsiyalarini bashorat qilish imkoniyatini beradi.'
    },
    {
        id: 3,
        name: 'Strategiya',
        des: 'Savdogarlar o\'z savdo strategiyalarini yaxshilash uchun foydalanishlari mumkin.'
    },
];

const XavfSizlik = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className={`max-container min-h-[80vh] flex flex-col lg:flex-row items-center gap-10 py-10`}>
            <div className={`w-full lg:w-[60%] p-4`}>
                <div data-aos="fade-up">
                    <Heading text={`Xavfsizlik choralari`} /></div>
                {data.map(({ id, name, des }) => (
                    <div className='bg-lightGreen p-4 mt-4 rounded-lg' key={id} data-aos="fade-up">
                        <Cards
                            title={name}
                            description={des}
                        />
                    </div>
                ))}
                
            </div>
            <div className={`w-full lg:w-[40%] overflow-hidden shadow-lg rounded-md mt-4 lg:mt-0`} data-aos="fade-up">
                <img src={qrApp} alt="qr img" className={`w-full h-full`} />
            </div>
        </div>
    )
}

export default XavfSizlik;
