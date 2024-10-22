import Heading from "../../components/heading.tsx";
import { Cards } from "../../components";
import img1 from '../../assets/img.png'
import img2 from '../../assets/img_1.png'
import img3 from '../../assets/img_2.png'

const data = [
    {
        id: 1,
        img: img1,
        name: 'QR-kodni skanerlash',
        des: 'Xaridor QR-kodni skanerlashi yoki URL manziliga o\'tishi orqali to\'lovni boshlashi mumkin.'
    },
    {
        id: 2,
        img: img2,
        name: 'To\'lov miqdorini ko\'rish',
        des: 'Skanerlangandan so\'ng, to\'lov miqdori ko\'rsatiladi yoki xaridor tomonidan dinamik ravishda kiritiladi.'
    },
    {
        id: 3,
        img: img3,
        name: 'To\'lovni amalga oshirish',
        des: 'Xaridor to\'lov miqdorini tasdiqlab, to\'lovni amalga oshiradi.'
    },
]

const PaymentProcess = () => {
    return (
        <div className={`max-container min-h-[60vh] py-20 px-6 sm:px-8 md:px-0`}>
            <div data-aos="fade-up">
                <Heading text={`To'lov jarayoni`} />
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12`}>
                {data.map(item => (
                    <div data-aos="fade-up" key={item.id}>
                        <Cards
                            imgStyle={'w-[60%] h-14'}
                            imgSrc={item.img}
                            title={item.name}
                            description={item.des}
                            key={item.id}
                        />
                    </div>

                ))}
            </div>
        </div>
    );
};

export default PaymentProcess;
