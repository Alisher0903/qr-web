import Heading from "../../components/heading.tsx";
import {Cards} from "../../components";
import React from "react";

const data = [
    {name: 'QR-kodlarni ulashish', des: 'Savdogarlar QR-kodlarini ijtimoiy tarmoqlarda osongina ulasha olishadi.'},
    {name: 'To\'g\'ridan-to\'g\'ri to\'lov', des: 'Xaridorlar ulashilgan QR-kodlar orqali to\'lovlarni amalga oshirishlari mumkin.'},
    {name: 'Bot orqali yuborish', des: 'Telegram bot yordamida QR-kodlarni ijtimoiy tarmoqlarga osongina yuborish mumkin.'},
]

const Networks: React.FC = () => {
    return (
        <div className={'flex justify-center items-center bg-bgDarkBlue w-full min-h-[100vh]'}>
            <div className="w-[60%] h-[90%] bg-white p-16 rounded-xl">
                <Heading text={'Ijtimoiy tarmoqlar bilan integratsiya'}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {data.map(d => (
                        <div className={'bg-lightGreen border border-green/70 rounded-md p-5'}>
                            <Cards title={d.name} description={d.des}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Networks;
