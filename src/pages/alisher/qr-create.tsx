import React from "react";
import Heading from "../../components/heading.tsx";
import {Cards} from "../../components";

const data = [
    {
        id: 1,
        name: "To'lov miqdorini kiritish",
        des: 'Savdogar to\'lov miqdorini kiritadi yoki xaridor uni dinamik ravishda kiritish imkoniyatiga ega bo\'ladi.'
    },
    {id: 2, name: "QR-kodni yaratish", des: "Tizim QR-kodni yaratadi va uni xaridorga taqdim etadi."},
    {id: 3, name: "Tavsif qo'shish", des: "To'lovga ixtiyoriy ravishda tavsif qo'shish mumkin."},
]

const QrCreate: React.FC = () => {
    return (
        <div className={'flex justify-center items-center bg-bgDarkBlue w-full min-h-screen'}>
            <div className="w-[95%] lg:w-[60%] h-[90%] bg-white p-16 my-10 rounded-xl">
                <Heading text={'QR-kod yaratish'}/>
                <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-16 mt-10">
                    <div className={`lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6`}>
                        {data.map(item => (
                            <div className={'flex justify-start items-start gap-6'} key={item.id}>
                                <StepNumber number={item.id}/>
                                <Cards
                                    title={item.name}
                                    description={item.des}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Left Column */}
                    <div className="lg:flex flex-col items-start gap-12 hidden">
                        <Cards
                            title={'To\'lov miqdorini kiritish'}
                            description={'Savdogar to\'lov miqdorini kiritadi yoki xaridor uni dinamik ravishda kiritish imkoniyatiga ega bo\'ladi.'}
                        />
                        <Cards
                            title="QR-kodni yaratish"
                            description="Tizim QR-kodni yaratadi va uni xaridorga taqdim etadi."
                        />
                    </div>

                    {/* Middle Line with Numbers */}
                    <div className="lg:flex flex-col justify-between items-center hidden gap-12">
                        <StepNumber number={1}/>
                        <StepNumber number={2}/>
                        <StepNumber number={3}/>
                    </div>

                    {/* Right Column */}
                    <div className="lg:flex flex-col items-start hidden">
                        <Cards
                            title="Tavsif qo'shish"
                            description="To'lovga ixtiyoriy ravishda tavsif qo'shish mumkin."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const StepNumber: React.FC<{ number: number }> = ({number}) => (
    <div className="flex items-center justify-center w-12 h-12 bg-lightGreen rounded-xl border border-green/70">
        <span className="text-lg font-bold text-darkBlue">{number}</span>
    </div>
);

export default QrCreate;
