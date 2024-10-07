import { Cards } from "../../components";
import Heading from "../../components/heading";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Server = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div className="max-container p-4">
            <div data-aos="fade-up">
                <Heading text="Markaziy server" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 p-4">
                <div data-aos="fade-up">
                    <Cards
                        imgSrc={""}
                        title="API va Backend mantig'i"
                        description="Barcha funksiyalar API orqali amalga oshiriladi."
                    />
                </div>
                <div data-aos="fade-up">
                    <Cards
                        imgSrc={''}
                        title="Ma'lumotlar bazasi"
                        description="Tizim foydalanuvchilar va tranzaksiyalar haqida ma'lumotlarni saqlaydi."
                    />
                </div>
                <div data-aos="fade-up">
                    <Cards
                        imgSrc={''}
                        title="Xizmat ko'rsatish"
                        description="Foydalanuvchilar uchun barcha xizmatlar markaziy server orqali taqdim etiladi."
                    />
                </div>

            </div>
        </div>

    );
};

export default Server;
