import Heading from '../../components/heading';
import qrApp from "../../assets/end-section.avif";
import { Cards } from '../../components';

const data = [
    {
        id: 1,
        name: 'Blockchain integratsiyasi',
        des: "Mijozlarga kriptovalyutalar orqali toʻlovlarni amalga oshirish imkoniyatini berish."
    },
    {
        id: 2,
        name: "AI yordamchisi",
        des: "Savdogarlarga AI asosidagi maslahatchi tizimi bilan yordam berish."
    },
    {
        id: 3,
        name: 'IoT integratsiyasi',
        des: `"Aqlli" qurilmalar orqali avtomatlashtirilgan toʻlovlarni amalga oshirish.`
    },
];

const Kelajek = () => {
    return (
        <div className={`max-container min-h-[90vh] flex flex-col lg:flex-row items-center gap-10 py-10`}>
            <div className={`w-full lg:w-[60%] p-4`}>
                <Heading text={`Kelajak rejalari`} />
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
};

export default Kelajek;
