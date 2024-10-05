import Heading from "../../components/heading.tsx";
import img from '../../assets/shop-section14.avif'
import {Cards} from "../../components";

const data = [
    {
        id: 1,
        name: 'Qo\'shimcha mahsulotlarni taklif qilish',
        des: 'Xaridorga to\'lovdan so\'ng qo\'shimcha mahsulotlar yoki xizmatlar taklif qilish.'
    },
    {
        id: 2,
        name: 'Savdo hajmini oshirish',
        des: 'Savdogarlar uchun savdo hajmini oshirish imkoniyatini beradi.'
    },
    {
        id: 3,
        name: 'Xabarnoma yuborish',
        des: 'Xaridorlarga qo\'shimcha mahsulotlar haqida xabar yuborish mumkin.'
    },
]

const CrossOpportunities = () => {
    return (
        <div className={`max-container min-h-[100vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[60%]`}>
                <Heading size={'lg:text-5xl'} text={`Kross-sotuv va upsell imkoniyatlari`}/>
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
            <div className={`w-[40%] h-full`}>
                <img src={img} alt="people img" className={`w-full h-full shadow-lg rounded-md`}/>
            </div>
        </div>
    );
};

export default CrossOpportunities;
