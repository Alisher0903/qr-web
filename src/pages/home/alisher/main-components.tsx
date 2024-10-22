import Heading from "../../../components/heading.tsx";
import {Cards} from "../../../components";
import img1 from '../../../assets/main-components/img1.avif'
import img2 from '../../../assets/main-components/img2.avif'
import img3 from '../../../assets/main-components/img3.avif'
import img4 from '../../../assets/main-components/img4.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const data = [
    {
        id: 1,
        img: img1,
        name: 'Mobil ilova',
        des: 'iOS va Android qurilmalari uchun maxsus ilovalar.'
    },
    {
        id: 2,
        img: img2,
        name: 'Veb-sayt',
        des: 'Veb-platforma orqali tizimni boshqarish imkoniyati.'
    },
    {
        id: 3,
        img: img3,
        name: 'Telegram-bot',
        des: 'Telegram orqali tezkor xizmat ko\'rsatish.'
    },
    {
        id: 4,
        img: img4,
        name: 'Markaziy server',
        des: 'Ma\'lumotlar bazasi va AI tahlil tizimi.'
    },
]

const MainComponents = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    }, []);
    return (
        <section id={'main-components'}>
            <div className={`md:max-w-[950px] md:mx-auto min-h-[60vh] py-10 px-8 md:px-0 mt-10 md:mt-0`}>
                <div data-aos="fade-up">
                    <Heading size={'text-xl md:2xl lg:3xl'} text={`Asosiy komponentlar`}/>
                </div>
                <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-12`}>
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
        </section>
    );
};

export default MainComponents;
