
import Heading from '../../components/heading'
import qrApp from "../../assets/qr-section18.avif";
import { Cards } from '../../components';

const data = [
    {
        id: 1,
        name: 'Intuitiv interfeys',
        des: "Foydalanuvchilar uchun sodda va tushunarli interfeys."
    },
    {
        id: 2,
        name: "To'lovlarni boshqarish",
        des: "To'lovlarni va operatsiyalarni qulay boshqarish imkoniyatlari."
    },
    {
        id: 3,
        name: 'Keng funksionallik',
        des: "Hisobotlar yaratish va ma'lumotlarni tahlil qilish uchun keng imkoniyatlar."
    },
]

const WebSayt = () => {
    return (
        <div className={`max-container min-h-[90vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[40%] h-full`}>
                <img src={qrApp} alt="people img" className={`w-full h-full shadow-lg rounded-md`}/>
            </div>
            <div className={`w-[60%]`}>
                <Heading text={`Veb-sayt`}/>
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
    );
}

export default WebSayt
