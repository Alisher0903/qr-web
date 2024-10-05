import React from "react";
import Heading from "../../components/heading.tsx";
import { Cards } from "../../components/index.tsx";


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
    return (
        <div className={'flex justify-center items-center bg-bgDarkBlue w-full min-h-screen'}>
            <div className="w-[80%] h-[98%] bg-white p-16 rounded-xl">
                <Heading text={`Foydalanuvchi qo'llab-quvvatlash`} />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                </div>
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
        </div>
    );
};

export default Quvvatlash;
