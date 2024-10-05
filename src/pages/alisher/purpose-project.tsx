import Heading from "../../components/heading.tsx";
import img from '../../assets/people-section2.avif'
import {Cards} from "../../components";

const data = [
    {
        id: 1,
        name: 'Qulay to\'lov',
        des: 'QR-kodlar yordamida to\'lovlarni tez va oson qabul qilish imkoniyatini yaratish.'
    },
    {
        id: 2,
        name: 'Keng imkoniyatlar',
        des: 'Savdogarlarga mobil ilova, veb-sayt va Telegram-bot orqali xizmatlarni taqdim etish.'
    },
    {
        id: 3,
        name: 'Foydalanuvchi qulayligi',
        des: 'Ko‘p tilli qo‘llab-quvvatlash va foydalanuvchilar uchun qulay interfeys taqdim etish.'
    },
]

const PurposeProject = () => {
    return (
        <div className={`max-container min-h-[90vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[40%] h-full`}>
                <img src={img} alt="people img" className={`w-full h-full shadow-lg rounded-md`}/>
            </div>
            <div className={`w-[60%]`}>
                <Heading text={`Loyiha maqsadi`}/>
                {data.map(item => (
                    <div key={item.id} className={'flex items-start justify-start gap-7 mt-10'}>
                        <div
                            className={'bg-lightGreen border border-green/80 flex justify-center items-center text-xl text-darkBlue rounded-md w-10 h-10 font-bold mt-1'}>
                            {item.id}
                        </div>
                        <Cards title={item.name} description={item.des}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PurposeProject;
