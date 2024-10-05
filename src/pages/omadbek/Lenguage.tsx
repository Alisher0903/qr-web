import { Cards } from "../../components";
import Heading from "../../components/heading";

const data = [
    {
        id: 1,
        name: 'Tilni tanlash',
        des: 'Foydalanuvchilar istalgan tilni tanlash imkoniyatiga ega.'
    },
    {
        id: 2,
        name: 'Avtomatik tarjima',
        des: 'Interfeys va xabarlar avtomatik ravishda tarjima qilinadi.'
    },
    {
        id: 3,
        name: 'Mahalliylashtirish',
        des: 'Har bir bozor uchun maxsus moslashtirilgan kontent taqdim etiladi.'
    },
];

const Lenguage = () => {
    return (
        <div className="max-container">
            <Heading text="Ko'p tilli qo'llab-quvvatlash" />
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

export default Lenguage;
