import { Cards } from "../../components";
import Heading from "../../components/heading";

const data = [
    {
        id: 1,
        name: 'Savdo hajmi',
        des: "Kunlik, haftalik va oylik savdo hajmi bo'yicha ma'lumotlar."
    },
    {
        id: 2,
        name: 'Mijozlar tahlili',
        des: "Mijozlar xulq-atvori va xarid odatlari to'g'risida ma'lumotlar."
    },
    {
        id: 3,
        name: 'Tranzaksiyalar tahlili',
        des: "O'rtacha chek va tranzaksiyalar soni bo'yicha ma'lumotlar."
    },
];

const Statistik = () => {
    return (
        <div className="max-container">
            <Heading text="Statistika va tahlil" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {data.map(({ id, name, des }) => (
                    <Cards
                        key={id}  
                        imgSrc={""}  
                        title={name}
                        description={des}
                    />
                ))}
            </div>
        </div>
    );
};

export default Statistik;
