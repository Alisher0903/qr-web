import Heading from "../../components/heading.tsx";
import img from '../../assets/qr-section1.avif'
import {styles} from "../../const.ts";

const QrMain = () => {
    return (
        <div className={`md:max-w-[950px] md:mx-auto min-h-[90vh] flex md:flex-nowrap flex-wrap justify-center md:justify-between items-center md:gap-10 md:py-10`}>
            <div className={`w-full md:w-[60%] px-8 md:px-0`}>
                <Heading text={`QR-kod orqali to'lov tizimi`}/>
                <p className={`${styles.par} mt-6`}>
                    Savdogarlar va xaridorlar uchun zamonaviy va qulay to'lov usuli.
                </p>
                <div className={`flex md:items-center md:justify-start flex-wrap md:flex-nowrap gap-5 mt-7`}>
                    <button className={`w-full md:w-auto bg-green/90 text-white rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                        Boshlash
                    </button>
                    <button
                        className={`w-full md:w-auto border border-green text-green rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                        Batafsil ma'lumot
                    </button>
                </div>
            </div>
            <div className={`w-full md:w-[40%] overflow-hidden shadow-lg md:rounded-md h-[300px] md:h-auto`}>
                <img src={img} alt="qr img" className={`w-full h-full object-cover shadow-md`}/>
            </div>
        </div>
    );
};

export default QrMain;
