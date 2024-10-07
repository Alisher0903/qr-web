import Heading from "../../components/heading.tsx";
import img from '../../assets/phone-section7.avif';
import { Cards } from "../../components";

const data = [
    {
        id: 1,
        name: 'Push-bildirishnomalar',
        des: 'Mobil ilovada to\'lov muvaffaqiyatli amalga oshirilganligi to\'g\'risida xabar.'
    },
    {
        id: 2,
        name: 'Veb xabarnomalar',
        des: 'Veb interfeys orqali to\'lovlar haqida ma\'lumot olish.'
    },
    {
        id: 3,
        name: 'Telegram xabarlari',
        des: 'Telegram orqali to\'lov holati to\'g\'risida xabar olish.'
    },
];

const NotificationsNotices = () => {
    return (
        <div className={`max-container min-h-[95vh] flex flex-col lg:flex-row items-center gap-10 py-10`}>
            <div className={`flex-1 p-4`}>
                <Heading size={'text-xl md:text3xl lg:text-5xl'} text={`Bildirishnomalar va xabarnomalar`} />
                <div className={'grid grid-cols-1 gap-5 mt-10'}>
                    {data.map(item => (
                        <div key={item.id} className={'bg-lightGreen border border-green/50 rounded-md p-5 shadow-md'}>
                            <Cards title={item.name} description={item.des} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={`flex-1 h-full`}>
                <img src={img} alt="people img" className={`w-full h-full shadow-lg md:rounded-md object-cover`} />
            </div>
        </div>
    );
};

export default NotificationsNotices;
