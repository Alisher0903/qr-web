import Heading from "../../../components/heading.tsx";
import { Cards } from "../../../components";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const data = [
    { name: 'Tarixni koʻrish', des: 'Barcha oʻtgan va hozirgi tranzaksiyalar roʻyxatini koʻrish imkoniyati.' },
    { name: 'Filtrlash', des: 'Turli mezonlar boʻyicha tranzaksiyalarni filtrlash.' },
    { name: 'Eksport', des: 'Tranzaksiyalar maʼlumotlarini faylga eksport qilish imkoniyati.' },
];

const TransactionManagement: React.FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="flex justify-center items-center bg-bgDarkBlue w-full min-h-screen">
            <div className="w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] bg-white p-6 md:p-10 lg:p-12 rounded-xl shadow-lg">
                <div data-aos="fade-up"><Heading size={'text-xl md:2xl lg:3xl'} text="Tranzaksiyalarni boshqarish" /></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {data.map((d, index) => (
                        <div data-aos="fade-up" key={index}>
                            <Cards
                                key={index}
                                title={d.name}
                                description={d.des}
                            />
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionManagement;
