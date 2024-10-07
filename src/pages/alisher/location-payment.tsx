import Heading from "../../components/heading.tsx";
import {Cards} from "../../components";

const data = [
    {
        name: 'Joylashuvni belgilash',
        des: 'Savdogarlar o\'z bizneslarining joylashuvini tizimga kiritish imkoniyatiga ega.'
    },
    {
        name: 'Yaqin savdo nuqtalarini topish',
        des: 'Xaridorlar yaqin atrofdagi savdo nuqtalarini osongina topishlari mumkin.'
    },
    {
        name: 'QR-kod orqali to\'lov',
        des: 'Topilgan joylarda QR-kod orqali qulay va tez to\'lovni amalga oshirish mumkin.'
    }
]

const LocationPayment = () => {
    return (
        <div className={'py-10 min-h-[70vh] bg-green flex items-center'}>
            <div className={'max-container p-4'}>
                <Heading text={'Geolokatsiya asosida to\'lovlar'}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {data.map(d => (
                        <Cards imgStyle={'w-full'} title={d.name} description={d.des}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LocationPayment;
