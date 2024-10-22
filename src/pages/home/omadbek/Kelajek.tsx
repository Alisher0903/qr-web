import Heading from '../../../components/heading.tsx';
import qrApp from "../../../assets/end-section.avif";
import { Cards } from '../../../components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const data = [
    {
        id: 1,
        name: 'Blockchain integratsiyasi',
        des: "Mijozlarga kriptovalyutalar orqali toʻlovlarni amalga oshirish imkoniyatini berish."
    },
    {
        id: 2,
        name: "AI yordamchisi",
        des: "Savdogarlarga AI asosidagi maslahatchi tizimi bilan yordam berish."
    },
    {
        id: 3,
        name: 'IoT integratsiyasi',
        des: `"Aqlli" qurilmalar orqali avtomatlashtirilgan toʻlovlarni amalga oshirish.`
    },
];

const Kelajak = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className={`max-container min-h-[90vh] flex flex-col lg:flex-row items-center gap-10 py-10`}>
            <div className={`w-full lg:w-[60%] p-4`}>
                <div data-aos="fade-up">
                    <Heading text={`Kelajak rejalari`} />
                </div>
                {data.map(item => (
                    <div key={item.id} className={'flex items-start justify-start gap-7 mt-10'} data-aos="fade-up">
                        <div
                            className={'bg-lightGreen border border-green/80 flex justify-center items-center text-xl text-darkBlue rounded-md w-10 h-10 font-bold mt-1'}>
                            {item.id}
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

export default Kelajak;
