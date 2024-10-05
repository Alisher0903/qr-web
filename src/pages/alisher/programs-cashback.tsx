import Heading from "../../components/heading.tsx";
import img from '../../assets/linerGradiant-section10.avif'
import {Cards} from "../../components";
import {FaGifts} from "react-icons/fa";
import {MdCreditCard} from "react-icons/md";
import {IoMdNotifications} from "react-icons/io";

const data = [
    {
        id: 1,
        img: <FaGifts className={'text-3xl text-green'}/>,
        name: 'Bonus dasturlari',
        des: 'Mijozlarni rag\'batlantirish va jalb qilish uchun bonus dasturlarini ishga tushirish.'
    },
    {
        id: 2,
        img: <MdCreditCard className={'text-3xl text-green'}/>,
        name: 'Cashback',
        des: 'QR-kod orqali to\'lovlar uchun cashback taqdim etib, mijozlarga qo\'shimcha foyda berish.'
    },
    {
        id: 3,
        img: <IoMdNotifications className={'text-3xl text-green'}/>,
        name: 'Bildirishnomalar',
        des: 'Mijozlarni bonuslar va cashback haqida xabardor qilish uchun bildirishnomalar yuborish.'
    },
]

const ProgramsCashback = () => {
    return (
        <div className={`max-container min-h-[100vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[40%] h-full`}>
                <img src={img} alt="people img" className={`w-full h-full shadow-lg rounded-md`}/>
            </div>
            <div className={`w-[60%]`}>
                <Heading text={`Loyallik dasturlari va cashback`}/>
                {data.map(item => (
                    <div key={item.id} className={'mt-8'}>
                        <Cards isIcon imgSrc={item.img} title={item.name} description={item.des}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramsCashback;
