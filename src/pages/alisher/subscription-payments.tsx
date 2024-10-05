import Heading from "../../components/heading.tsx";
import {Cards} from "../../components";

const data = [
    {
        id: 1,
        name: 'Maxsus QR-kodlar',
        des: 'Abonement xizmatlarini QR-kod orqali qulay toʻlash imkoniyatini yaratish.'
    },
    {
        id: 2,
        name: 'Avtomatik toʻlovlar',
        des: 'Muntazam toʻlovlarni avtomatlashtirish orqali vaqtni tejash.'
    },
    {
        id: 3,
        name: 'Boshqarish',
        des: 'Abonementlar va muntazam toʻlovlarni samarali boshqarish va tahlil qilish.'
    },
]

const SubscriptionPayments = () => {
    return (
        <div className={'flex justify-center items-center bg-bgDarkBlue w-full min-h-[90vh]'}>
            <div className="w-[70%] h-[90%] bg-white p-16 rounded-xl">
                <Heading size={'lg:text-5xl'} text={`Abonement va muntazam toʻlovlar`}/>
                <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'}>
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
        </div>
    );
};

export default SubscriptionPayments;
