import Heading from "../../components/heading.tsx";
import img from '../../assets/phone-section7.avif'
import {Cards} from "../../components";

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
]

const NotificationsNotices = () => {
    return (
        <div className={`max-container min-h-[95vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[60%]`}>
                <Heading size={'lg:text-5xl'} text={`Bildirishnomalar va xabarnomalar`}/>
                <div className={'grid grid-cols-1 gap-5 mt-10'}>
                    {data.map(item => (
                        <div key={item.id} className={'bg-lightGreen border-green/50 border rounded-md p-5'}>
                            <Cards title={item.name} description={item.des}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`w-[40%] h-full`}>
                <img src={img} alt="people img" className={`w-full h-full shadow-lg rounded-md object-cover`}/>
            </div>
        </div>
    );
};

export default NotificationsNotices;
