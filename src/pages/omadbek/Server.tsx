import { Cards } from "../../components";
import Heading from "../../components/heading";
const Server = () => {
    return (
        <div className="max-container">
            <Heading text="Markaziy server" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <Cards
                    imgSrc={""}
                    title="API va Backend mantig'i"
                    description="Barcha funksiyalar API orqali amalga oshiriladi."
                />
                <Cards
                    imgSrc={''}
                    title="Ma'lumotlar bazasi"
                    description="Tizim foydalanuvchilar va tranzaksiyalar haqida ma'lumotlarni saqlaydi."
                />
                <Cards
                    imgSrc={''}
                    title="Xizmat ko'rsatish"
                    description="Foydalanuvchilar uchun barcha xizmatlar markaziy server orqali taqdim etiladi."
                />
            </div>
        </div>
        
    );
};

export default Server;
