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
        <div className={`md:max-w-[950px] md:mx-auto min-h-[90vh] flex md:flex-nowrap flex-wrap justify-center md:justify-between items-center md:gap-10 md:py-10`}>
            <div className={`w-full md:w-[40%] overflow-hidden shadow-lg md:rounded-md h-[300px] md:h-auto`}>
                <img src={img} alt="people img" className={`w-full h-full object-cover shadow-lg`}/>
            </div>
            <div className={`w-full md:w-[60%] px-8 md:px-0 mt-10 sm:mt-0`}>
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
