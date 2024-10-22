import Heading from "../../components/heading.tsx";
import ScrollToTop from "../../components/scroll-to-top.tsx";

const Offer = () => {
    return (
        <div className="max-w-[1000px] mx-auto px-5 md:px-2 py-10">
            <ScrollToTop/>
            <Heading text={'Shartlar va Shartlar (T&C)'}/>
            <p className="text-sm text-gray-600 my-6">Oxirgi yangilangan: 14/10/2024</p>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Umumiy ma'lumot</h2>
                <p className="text-lg text-gray-700">
                    Ushbu hujjat SBP QRPay ilovasidan foydalanishni boshqaradi. Bizning ilovamizdan foydalanish orqali
                    foydalanuvchilar quyidagi shartlar va shartlarga rozilik bildiradilar.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Foydalanish bo'yicha ko'rsatmalar</h2>
                <p className="text-lg text-gray-700">
                    Sotuvchilar QR kodlarini faqat o'z xizmatlari yoki mahsulotlari bilan bog'liq qonuniy
                    tranzaktsiyalar uchun yaratish uchun javobgardir. Uzrli sabablarsiz QR kodlarini yaratish qat'iyan
                    man etiladi.
                    Foydalanuvchilar barcha toʻlov tranzaksiyalari toʻgʻri bajarilishini taʼminlashi kerak va har qanday
                    xatoliklar darhol xabar qilinishi kerak.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. To'lovni bekor qilish</h2>
                <p className="text-lg text-gray-700">
                    Foydalanuvchilar tranzaktsiyadan keyin 24 soat ichida to'lovni bekor qilishlari mumkin. Ushbu
                    muddatdan keyin bekor qilish mumkin bo'lmaydi va xaridor va sotuvchi o'rtasidagi nizolarni hal
                    qilish kerak bo'ladi.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. To'lovlar va to'lovlar</h2>
                <p className="text-lg text-gray-700">
                    QR toʻlov ishlab chiqarish xizmatidan foydalanish uchun sotuvchilardan oylik abonent toʻlovi
                    olinishi mumkin. Obuna tafsilotlari, jumladan, narxlar sotuvchilar roʻyxatdan oʻtgandan soʻng ular
                    bilan baham koʻriladi.
                    To'lovlar qaytarilmaydi, biz tomonimizdagi muammolar tufayli xizmat ko'rsatishda uzilishlar yuzaga
                    kelgan hollar bundan mustasno.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Ma'lumotlarning maxfiyligi</h2>
                <p className="text-lg text-gray-700">
                    Biz Maxfiylik siyosatimizda tavsiflanganidek, foydalanuvchi ma'lumotlari, to'lov statistikasi va
                    tranzaksiya ma'lumotlari kabi ma'lum ma'lumotlarni to'playmiz. Ushbu ilovadan foydalanish orqali
                    foydalanuvchilar o'z ma'lumotlarini to'plash va ulardan foydalanishga rozilik bildiradilar.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Mas'uliyatni cheklash</h2>
                <p className="text-lg text-gray-700">
                    SBP QRPay sotuvchilar va xaridorlar o'rtasidagi ruxsatsiz bitimlar yoki kelishmovchiliklar uchun
                    javobgar emas. Bizning rolimiz QR-ga asoslangan to'lovlar uchun platformani taqdim etish bilan
                    cheklangan va tranzaksiyani amalga oshirishdagi har qanday xatolar ishtirokchilarning
                    javobgarligidir.
                    Biz texnik nosozliklar, xizmat ko'rsatishdagi uzilishlar yoki ilovamizdan foydalanish natijasida
                    yuzaga keladigan yo'qotishlar uchun javobgar emasmiz.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Shartlarga o'zgartirishlar</h2>
                <p className="text-lg text-gray-700">
                    Biz ushbu shartlarni istalgan vaqtda o'zgartirish huquqini saqlab qolamiz. O'zgartirishlar ilovada
                    e'lon qilinadi va xizmatdan doimiy foydalanish yangi shartlarni qabul qilishni anglatadi.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Amaldagi qonun</h2>
                <p className="text-lg text-gray-700">
                    Ushbu Shartlar va shartlar O'zbekistan qonunlari bilan tartibga solinadi, uning qonun hujjatlari
                    ziddiyatidan qat'i nazar.
                </p>
            </section>
        </div>
    );
};

export default Offer;
