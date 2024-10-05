import Heading from "../../components/heading.tsx";
import img from '../../assets/qr-section1.avif'
import {styles} from "../../const.ts";

const QrMain = () => {
    return (
        <div className={`max-container flex lg:flex-nowrap items-center gap-10 py-10`}>
            <div className={`w-[60%]`}>
                <Heading text={`QR-kod orqali to'lov tizimi`}/>
                <p className={`${styles.par} mt-6`}>
                    Savdogarlar va xaridorlar uchun zamonaviy va qulay to'lov usuli.
                </p>
                <div className={`flex items-center justify-start gap-5 mt-7`}>
                    <button className={`bg-green/90 text-white rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                        Boshlash
                    </button>
                    <button
                        className={`border border-green text-green rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                        Batafsil ma'lumot
                    </button>
                </div>
            </div>
            <div className={`w-[40%] overflow-hidden shadow-lg rounded-md`}>
                <img src={img} alt="qr img" className={`w-full h-full`}/>
            </div>
        </div>
    );
};

export default QrMain;
