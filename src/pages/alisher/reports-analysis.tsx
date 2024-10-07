import Heading from "../../components/heading.tsx";
import img from '../../assets/laptop-section8.avif'
import { Cards } from "../../components";

const data = [
    {
        id: 1,
        name: 'Hisobotlar yaratish',
        des: 'Kunlik, haftalik va oylik ma\'lumotlarni tahlil qilish.'
    },
    {
        id: 2,
        name: 'Eksport qilish',
        des: 'Hisobotlarni PDF yoki Excel formatida yuklab olish mumkin.'
    },
    {
        id: 3,
        name: 'AI tahlil',
        des: 'Sun\'iy intellekt yordamida savdo ma\'lumotlarini tahlil qilish va tendentsiyalarni aniqlash.'
    },
];

const ReportsAnalysis = () => {
    return (
        <div className="max-container min-h-[100vh] flex flex-col lg:flex-row items-center gap-8 py-10">
            <div className="w-full lg:w-1/2 h-full">
                <img src={img} alt="people img" className="w-full h-full shadow-lg rounded-md" />
            </div>
            <div className="w-full lg:w-1/2 p-4">
                <Heading size="lg:text-4xl md:text-5xl" text="Hisobotlar va tahlil" />
                {data.map(item => (
                    <div key={item.id} className="flex items-start justify-start gap-5 md:gap-7 mt-8 md:mt-10">
                        <div className="bg-lightGreen border border-green/80 flex justify-center items-center text-lg md:text-xl text-darkBlue rounded-md w-10 h-10 font-bold mt-1">
                            {item.id}
                        </div>
                        <Cards title={item.name} description={item.des} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReportsAnalysis;
