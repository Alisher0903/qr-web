import Heading from "../../components/heading.tsx";
import img from '../../assets/qr-section1.avif'
import Modal from "../../components/modal.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

const defVal = {
    fullName: "",
    phone: "",
    filialCode: "",
    inn: ""
}

const QrMain = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [isModal, setIsModal] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [postData, setPostData] = useState<any>(defVal);

    const openModal = () => setIsModal(true)
    const closeModal = () => {
        setIsModal(false)
        setPostData(defVal)
    }

    const postRequest = async () => {
        setLoading(true)
        try {
            const {data} = await axios.post('https://apk.qrpay.uz/request/save', {
                fullName: postData.fullName,
                phone: `+998${postData.phone}`,
                filialCode: postData.filialCode,
                inn: postData.inn,
            })
            if (data?.error?.code) {
                setLoading(false)
                toast.error(data?.error?.message)
            } else {
                toast.success('So\'rov muvaffaqiyatli yuborildi.')
                setLoading(false)
            }
        } catch {
            setLoading(false)
            toast.error('Xatolik yuz berdi.')
        } finally {
            console.clear()
            closeModal()
        }
    }

    const handleInputChange = (name: string, value: string | boolean) => {
        setPostData({
            ...postData,
            [name]: value
        });
    };

    const styles = {
        input: 'w-full rounded-lg border border-darkBlue bg-transparent py-2 px-5 text-black outline-none focus:border-darkBlue focus-visible:shadow-none',
        par: 'text-darkBlue text-base md:text-xl font-normal leading-5'
    };

    return (
        <>
            <div
                className={`md:max-w-[950px] md:mx-auto min-h-[90vh] flex md:flex-nowrap flex-wrap justify-center md:justify-between items-center md:gap-10 md:py-10`}>
                <div className={`w-full md:w-[60%] px-8 md:px-0`}>
                    <div data-aos="fade-up">
                        <Heading text={`QR-kod orqali to'lov tizimi`}/>
                        </div>
                    <p className={`${styles.par} mt-6`} data-aos="fade-up">
                        Savdogarlar va xaridorlar uchun zamonaviy va qulay to'lov usuli.
                    </p>
                    <div className={`flex md:items-center md:justify-start flex-wrap md:flex-nowrap gap-5 mt-7`} data-aos="fade-up">
                        <button
                            onClick={openModal}
                            className={`w-full md:w-auto bg-green/90 text-white rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                            Boshlash
                        </button>
                        <button
                            className={`w-full md:w-auto border border-green text-green rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                            <a href="#view-more">
                                Batafsil ma'lumot
                            </a>
                        </button>
                    </div>
                </div>
                <div className={`w-full md:w-[40%] overflow-hidden shadow-lg md:rounded-md h-[300px] md:h-auto`} data-aos="fade-up">
                    <img src={img} alt="qr img" className={`w-full h-full object-cover shadow-md`}/>
                </div>
            </div>
            <Modal
                key={'qr open web'}
                isOpen={isModal}
                onClose={() => {
                    closeModal()
                }}
            >
                <div className="gap-3 ml-1 min-w-60 sm:min-w-96 lg:min-w-[35rem]">
                    <div className="my-4">
                        <label className="block text-gray-700 mb-2" htmlFor="firstName">F.I.O</label>
                        <input
                            value={postData.fullName}
                            onChange={e => handleInputChange('fullName', e.target.value)}
                            className={styles.input}
                            id="firstName"
                            placeholder="F.I.O ni kiriting..."
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="filialCode">Filial kodi</label>
                        <input
                            value={postData.filialCode}
                            onChange={e => handleInputChange('filialCode', e.target.value)}
                            className={styles.input}
                            id="filialCode"
                            placeholder="Filial kodini kiriting.."
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">Telefon raqam (Namuna: 99 999
                            99 99)</label>
                        <input
                            type={`number`}
                            value={postData.phone}
                            onChange={e => {
                                const val = e.target.value;
                                if (val.length <= 9) handleInputChange('phone', e.target.value);
                            }}
                            onKeyDown={e => {
                                if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') e.preventDefault();
                            }}
                            className={styles.input}
                            id="phoneNumber"
                            placeholder="Telefon raqamni kiriting"
                            maxLength={9}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="inn">Inn</label>
                        <input
                            value={postData.inn}
                            onChange={e => handleInputChange('inn', e.target.value)}
                            className={styles.input}
                            type={`text`}
                            id="inn"
                            placeholder="Inn kiriting"
                        />
                    </div>
                    <div className={'flex justify-end items-center gap-6 mt-10'}>
                        <button
                            onClick={closeModal}
                            className={`w-full md:w-auto border border-green text-green rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                            Orqaga qaytish
                        </button>
                        <button
                            onClick={async () => {
                                if (postData.fullName && postData.filialCode && postData.inn && postData.phone) await postRequest()
                                else toast.error('Ma\'lumotlar to\'liqligini tekshirib ko\'ring')
                            }}
                            className={`w-full md:w-auto bg-green/90 text-white rounded-md shadow-md px-6 py-3 font-semibold text-base`}>
                            {loading ? 'Yuborilmoqda...' : 'Yuborish'}
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default QrMain;
