import Heading from "../../components/heading.tsx";
import {Cards} from "../../components";
import React from "react";

const data = [
    {name: 'Tarixni koʻrish', des: 'Barcha oʻtgan va hozirgi tranzaksiyalar roʻyxatini koʻrish imkoniyati.'},
    {name: 'Filtrlash', des: 'Turli mezonlar boʻyicha tranzaksiyalarni filtrlash.'},
    {name: 'Eksport', des: 'Tranzaksiyalar maʼlumotlarini faylga eksport qilish imkoniyati.'},
]

const TransactionManagement: React.FC = () => {
    return (
        <div className={'flex justify-center items-center bg-bgDarkBlue w-full min-h-[80vh]'}>
            <div className="w-[60%] h-[90%] bg-white p-16 rounded-xl">
                <Heading text={'Tranzaksiyalarni boshqarish'}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {data.map(d => (
                        <Cards title={d.name} description={d.des}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TransactionManagement;
