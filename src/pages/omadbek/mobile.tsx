
import Heading from '../../components/heading'
import qrApp from "../../assets/qr-section17.avif";
import { Cards } from '../../components';

const Mobile = () => {
    return (
        <div className={`max-container min-h-[80vh] flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[60%]`}>
                <Heading text={`Mobil ilovalar`} />
                <div className='bg-lightGreen p-4 mt-4 rounded-lg'>
                    <Cards
                        title='iOS platforma'
                        description='Apple qurilmalari uchun moʻljallangan maxsus ilova.'
                    />
                </div>
                <div className='bg-lightGreen p-4 mt-4 rounded-lg'>
                    <Cards
                        title='Android platforma'
                        description='Android qurilmalari uchun moʻljallangan maxsus ilova.'
                    />
                </div>
                <div className='bg-lightGreen p-4 mt-4 rounded-lg'>
                    <Cards
                        title='Funksionallik'
                        description='Foydalanuvchi hisoblarini va toʻlovlarni boshqarish imkoniyatlarini taqdim etadi.'
                    />
                </div>
            </div>
            <div className={`w-[50%] overflow-hidden shadow-lg rounded-md`}>
                <img src={qrApp} alt="qr img" className={`w-full h-full`} />
            </div>
        </div>
    )
}

export default Mobile
