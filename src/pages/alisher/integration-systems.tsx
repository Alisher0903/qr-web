import Heading from "../../components/heading.tsx";
import {Cards} from "../../components";
import img1 from '../../assets/img1-section11.avif'
import img2 from '../../assets/img2-section11.avif'

const data = [
    {
        name: 'Global to\'lov tizimlari',
        img: img1,
        des: 'PayPal, Stripe, Google Pay va Apple Pay kabi xalqaro to\'lov tizimlari bilan integratsiya qilish.'
    },
    {
        name: 'Xalqaro mijozlar',
        img: img2,
        des: 'Turli xil to\'lov usullaridan foydalanish imkoniyatini taqdim etish.'
    }
]

const IntegrationSystems = () => {
    return (
        <div className={'max-container py-10 min-h-[80vh] p-4'}>
            <Heading text={'Boshqa to\'lov tizimlari bilan integratsiya'}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                {data.map(d => (
                    <Cards imgSrc={d.img} imgStyle={'w-full'} title={d.name} description={d.des}/>
                ))}
            </div>
        </div>
    );
};

export default IntegrationSystems;
