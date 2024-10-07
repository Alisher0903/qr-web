import { Cards } from "../../components";
import Heading from "../../components/heading";

const data = [
    {
        id: 1,
        name: 'Smartfon orqali',
        des: "To'lovlarni qabul qilish uchun oddiy smartfondan foydalaning."
    },
    {
        id: 2,
        name: 'Karta qabul qilish',
        des: "Kontaktsiz kartalarni qabul qilish imkoniyatiga ega bo'ling."
    },
    {
        id: 3,
        name: 'Chek chop etish',
        des: "Mobil printer yordamida chekni chop eting."
    },
];

const Kassa = () => {
    return (
        <div className="max-container p-4">
            <Heading text="Mobil kassa" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {data.map(({ id, name, des }) => (
                    <Cards
                        key={id}  
                        imgSrc={""}  
                        title={name}
                        description={des}
                    />
                ))}
            </div>
        </div>
    );
};

export default Kassa;
