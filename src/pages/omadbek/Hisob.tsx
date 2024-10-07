import { Cards } from "../../components";
import Heading from "../../components/heading";
import backImg from "../../assets/bg-section24.avif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const data = [
    {
        id: 1,
        name: "Profil ma'lumotlarini tahrirlash",
        des: "Shaxsiy ma'lumotlaringizni yangilash va sozlash."
    },
    {
        id: 2,
        name: 'Xavfsizlik sozlamalari',
        des: "Parolni o'zgartirish va qo'shimcha himoya choralari."
    },
    {
        id: 3,
        name: 'Bildirishnomalarni sozlash',
        des: "Qaysi bildirishnomalarni olishni tanlash."
    },
];

const Hisob = () => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    return (
        <div
            style={{
                position: 'relative',
                backgroundImage: `url(${backImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                padding: '20px',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    opacity: .7
                }}
            ></div>
            <div className="max-container mt-12 relative z-10">
                <div data-aos="fade-up">
                    <Heading text="Hisobni boshqarish" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {data.map(({ id, name, des }) => (
                        <div key={id} className="bg-lightGreen py-8 px-4 rounded-lg" data-aos="fade-up">
                            <Cards
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

export default Hisob;
