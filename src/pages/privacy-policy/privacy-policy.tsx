import Heading from "../../components/heading.tsx";
import ScrollToTop from "../../components/scroll-to-top.tsx";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-[1000px] mx-auto px-5 md:px-2 py-10">
            <ScrollToTop/>
            <Heading text={'Maxfiylik Siyosati'}/>
            <p className="text-sm text-gray-600 my-6">Oxirgi yangilangan: 14.10.2024</p>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Umumiy ko‘rinish</h2>
                <p className="text-lg text-gray-700">
                    SBP QRPay da biz sizning maxfiyligingizni himoya qilishga sodiqmiz. Ushbu Maxfiylik siyosati sizning
                    ma'lumotlaringizni qanday yig'ishimiz, ishlatishimiz va saqlashimizni tushuntiradi.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Biz to'playdigan ma'lumotlar</h2>
                <p className="text-lg text-gray-700">
                    Biz quyidagi turdagi ma'lumotlarni yig'amiz:
                </p>
                <ul className="list-disc ml-8 text-lg text-gray-700">
                    <li>Kompaniya tafsilotlari: Kompaniya nomlari, soliq identifikatsiya raqamlari (INN) va sotuvchi
                        bilan bog'lanish ma'lumotlari kabi ma'lumotlar.
                    </li>
                    <li>Tranzaksiya ma'lumotlari: to'lov summalari, to'lov usullari va to'lov summalariga oid statistik
                        ma'lumotlar.
                    </li>
                    <li>Ilovadan foydalanish maʼlumotlari: Foydalanuvchilarning ilova bilan qanday aloqada boʻlishlari,
                        jumladan login va QR yaratish faoliyati haqida maʼlumot.
                    </li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Ma'lumotlarni almashish</h2>
                <p className="text-lg text-gray-700">
                    Ha, biz sizning maʼlumotlaringizni toʻlovlarni qayta ishlash uchun foydalanayotgan Rossiya toʻlov
                    tizimlari kabi uchinchi tomon xizmat koʻrsatuvchi provayderlari bilan baham koʻrishimiz mumkin. Ular
                    o'zlarining ma'lumotlar maxfiyligi amaliyotiga ega va ma'lumotlar bazalarida to'lov bilan bog'liq
                    ma'lumotlarni saqlash uchun javobgardirlar.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Ma'lumotlarni saqlash</h2>
                <p className="text-lg text-gray-700">
                    Biz to'plagan ma'lumotlar bizning xavfsiz ma'lumotlar bazalarimizda saqlanadi. Rossiya toʻlov
                    tizimlari bilan baham koʻrilgan maʼlumotlar ham ularning tegishli xavfsiz tizimlarida saqlanadi. Biz
                    barcha saqlash tizimlari ma'lumotlarni himoya qilish qoidalariga muvofiqligini va ruxsatsiz
                    kirishdan himoyalanganligini ta'minlash uchun choralar ko'ramiz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Ma'lumotlar xavfsizligi</h2>
                <p className="text-lg text-gray-700">
                    Ma'lumotlaringizni ruxsatsiz kirish yoki oshkor qilishdan himoya qilish uchun biz sanoat
                    standartidagi shifrlash va kirishni boshqarish vositalaridan foydalanamiz. Barcha tranzaktsiyalar
                    xavfsiz tarzda qayta ishlanadi va biz tizimimizni zaifliklar uchun doimiy ravishda kuzatib boramiz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Foydalanuvchi huquqlari</h2>
                <p className="text-lg text-gray-700">
                    Foydalanuvchilar o'zlarining shaxsiy ma'lumotlariga kirishni talab qilish yoki ma'lumotlarini
                    o'chirishni so'rash huquqiga ega. Bunday so'rovlar Sfera yechimlari orqali bizning
                    qo'llab-quvvatlash guruhimizga yuborilishi kerak.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Maxfiylik siyosatiga yangilanishlar</h2>
                <p className="text-lg text-gray-700">
                    Bu siyosat vaqti-vaqti bilan yangilanishi mumkin. Biz foydalanuvchilarni har qanday muhim
                    o'zgarishlar haqida xabardor qilamiz va yangilanishlardan keyin xizmatdan foydalanishni davom
                    ettirish sizning qayta ko'rib chiqilgan siyosatni qabul qilganingizni anglatadi.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
