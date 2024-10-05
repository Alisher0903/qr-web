import Heading from '../../components/heading';
import qrApp from "../../assets/secure-section21.avif";
import { Cards } from '../../components';

const data = [
    {
        id: 1,
        name: 'Tahlil',
        des: 'Foydalanuvchilarga chuqur tahlil qilish imkoniyatini taqdim etadi.'
    },
    {
        id: 2,
        name: 'Prognozlash',
        des: 'Kelajakdagi savdo tendentsiyalarini bashorat qilish imkoniyatini beradi.'
    },
    {
        id: 3,
        name: 'Strategiya',
        des: 'Savdogarlar o\'z savdo strategiyalarini yaxshilash uchun foydalanishlari mumkin.'
    },
];

const XavfSizlik = () => {
    return (
        <div className={`max-container min-h-[80vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[60%]`}>
                <Heading text={`Xavfsizlik choralari`} />
                
                {/* Map through the data array to create Cards */}
                {data.map(({ id, name, des }) => (
                    <div className='bg-lightGreen p-4 mt-4 rounded-lg' key={id}>
                        <Cards
                            title={name}
                            description={des}
                        />
                    </div>
                ))}
                
            </div>
            <div className={`w-[50%] overflow-hidden shadow-lg rounded-md`}>
                <img src={qrApp} alt="qr img" className={`w-full h-full`} />
            </div>
        </div>
    )
}

export default XavfSizlik;
