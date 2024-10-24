import { useEffect } from "react";
import { Cards } from "../../../components";
import Heading from "../../../components/heading.tsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        name: 'Yangi savdogarlarni jalb qilish',
        des: "Mavjud foydalanuvchilar yangi savdogarlarni taklif qilib, dasturga qo'shilishi mumkin."
    },
    {
        id: 2,
        name: 'Bonus tizimi',
        des: "Muvaffaqiyatli takliflar uchun bonuslar beriladi."
    },
    {
        id: 3,
        name: 'Hamkorlik darajasi',
        des: "Ko'proq takliflar qilgan foydalanuvchilar yuqori darajaga erishadi."
    },
];

const Hamkorlik = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div className="max-container p-4">
            <div data-aos="fade-up">
                <Heading text="Hamkorlik dasturi" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
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
        </div>
    );
};

export default Hamkorlik;
