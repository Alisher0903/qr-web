import { Cards } from "../components";
import Heading from "../components/heading";

// Import images from the assets folder
import qrApp from "../assets/qr-section17.avif";


const Server = () => {
    return (
        <div className="max-container">
            <Heading text="Markaziy server" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <div>
                <Heading text="Markaziy server" />
                <img src={qrApp} width={450} />
            </div>
        </div>
    );
};

export default Server;
