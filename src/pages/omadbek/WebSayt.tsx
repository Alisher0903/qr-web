
import Heading from '../../components/heading'
import qrApp from "../../assets/qr-section18.avif";
import { Cards } from '../../components';

const WebSayt = () => {
    return (
        <div className={`max-container min-h-[80vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[50%] overflow-hidden shadow-lg rounded-md`}>
                <img src={qrApp} alt="qr img" className={`w-full h-full`} />
            </div>
            <div className={`w-[60%]`}>
                <Heading text={`Veb-sayt`} />
                <div className='mt-4 p-4 flex'>
                <p className='bg-lightGreen p-3 text-2xl mr-3 font-bold'>1</p>
                    <Cards
                        title='Intuitiv interfeys'
                        description='Foydalanuvchilar uchun sodda va tushunarli interfeys.'
                    />
                </div>
                <div className='p-4 mt-4 flex '>
                <p className='bg-lightGreen p-3 text-2xl mr-3 font-bold'>2</p>
                    <Cards
                        title="To'lovlarni boshqarish"
                        description="To'lovlarni va operatsiyalarni qulay boshqarish imkoniyatlari."
                    />
                </div>
                <div className='mt-4 p-4 flex'>
                    <p className='bg-lightGreen px-3 text-2xl mr-3 rounded-xl font-bold'>3</p>
                    <Cards
                        title='Keng funksionallik'
                        description="Hisobotlar yaratish va ma'lumotlarni tahlil qilish uchun keng imkoniyatlar."
                    />
                </div>
            </div>

        </div>
    )
}

export default WebSayt
