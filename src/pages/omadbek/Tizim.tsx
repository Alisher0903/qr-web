import Heading from '../../components/heading';
import qrApp from "../../assets/progress-section22.avif";
import { Cards } from '../../components';

const data = [
    {
        id: 1,
        name: 'Real vaqtda monitoring',
        des: "Tizimning ishlashini real vaqtda kuzatib borish."
    },
    {
        id: 2,
        name: "Muammolarni oldindan aniqlash",
        des: "Potensial muammolarni erta bosqichda aniqlash imkonini beradi."
    },
    {
        id: 3,
        name: 'Avtomatlashtirilgan xabarlar',
        des: "Muammolar haqida avtomatik bildirishnomalar yuborish orqali tezkor choralar ko'rishga yordam beradi."
    },
];

const Tizim = () => {
    return (
        <div className={`max-container min-h-[90vh] flex flex-col lg:flex-row items-center gap-10 py-10`}>
            <div className={`w-full lg:w-[60%] p-4`}>
                <Heading text={`Tizim monitoringi`} />
                {data.map(item => (
                    <div key={item.id} className={'flex items-start justify-start gap-7 mt-10'}>
                        <div
                            className={'bg-lightGreen border border-green/80 flex justify-center items-center text-xl text-darkBlue rounded-md w-10 h-10 font-bold mt-1'}>
                            {item.id}
                        </div>
                        <Cards title={item.name} description={item.des} />
                    </div>
                ))}
            </div>
            <div className={`w-full lg:w-[40%] h-full`}>
                <img src={qrApp} alt="people img" className={`w-full h-full shadow-lg rounded-md`} />
            </div>
        </div>
    );
}

export default Tizim;
