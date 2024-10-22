import React, {useEffect} from "react";
import Heading from "../../components/heading.tsx";
import {Cards} from "../../components/index.tsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    {
        id: 1,
        name: '24/7 Yordam',
        des: "Kuning istalgan vaqtida mutaxassislarimizdan yordam oling."
    },
    {
        id: 2,
        name: "Jonli Chat",
        des: "Tezkor savollarga javob olish uchun jonli chatdan foydalaning."
    },
    {
        id: 3,
        name: "Bilimlar Bazasi",
        des: "Keng qamrovli ko'rsatmalar va tez-tez beriladigan savollarga javoblarni toping."
    },
];

const Quvvatlash: React.FC = () => {
    useEffect(() => {
        AOS.init({duration: 500});
    }, []);
    return (
        <div className={'flex justify-center items-center bg-bgDarkBlue w-full min-h-screen'}>
            <div className="w-full max-w-[950px] h-auto bg-white p-8 md:p-16 rounded-xl">
                <div data-aos="fade-up">
                    <Heading size={'text-xl md:2xl lg:3xl'} text={`Foydalanuvchi qo'llab-quvvatlash`}/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {data.map(({id, name, des}) => (
                        <div data-aos="fade-up" key={id}>
                            <Cards
                                key={id}
                                imgSrc={""}
                                title={name}
                                description={des}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Quvvatlash;
