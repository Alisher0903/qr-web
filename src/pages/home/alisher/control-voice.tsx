import Heading from "../../../components/heading.tsx";
import img from '../../../assets/linerGradiant-section10.avif';
import { Cards } from "../../../components";
import { FaUserAlt } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { GrTest } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const data = [
    {
        id: 1,
        img: <MdKeyboardVoice className={'text-4xl text-green'} />,
        name: 'Ovozli buyruqlar',
        des: 'Foydalanuvchilar ovozli buyruqlar yordamida tizimni boshqarishi mumkin, bu esa ularga qulaylik yaratadi.'
    },
    {
        id: 2,
        img: <GrTest className={'text-3xl text-green'} />,
        name: 'Tizimni boshqarish',
        des: 'Tizimni ovozli buyruqlar orqali boshqarish imkoniyati beriladi, masalan, "Chek yaratish", "Tranzaksiyani bekor qilish" kabi buyruqlarni berish mumkin.'
    },
    {
        id: 3,
        img: <FaUserAlt className={'text-3xl text-green'} />,
        name: 'Qulaylik',
        des: 'Ovozli buyruqlar tizimdan foydalanishni yanada osonlashtiradi va tezlashtiradi.'
    },
];

const ControlVoice = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className={`max-container min-h-[100vh] flex flex-col lg:flex-row items-center gap-10 py-10`}>
            <div className={`w-full lg:w-[60%] px-4`}>
                <div data-aos="fade-up">
                    <Heading size={'text-xl md:2xl lg:3xl'} text={`Ovozli buyruqlar yordamida boshqarish`} /></div>
                {data.map(item => (
                    <div key={item.id} className={'mt-8'} data-aos="fade-up">
                        <Cards isIcon imgSrc={item.img} title={item.name} description={item.des} />
                    </div>
                ))}
            </div>
            <div className={`w-full lg:w-[40%] h-full`} data-aos="fade-up" >
                <img src={img} alt="people img" className={`w-full h-full shadow-lg rounded-md`} />
            </div>
        </div>
    );
};

export default ControlVoice;
