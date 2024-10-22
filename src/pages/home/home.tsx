import QrMain from "./alisher/qr-main.tsx";
import PurposeProject from "./alisher/purpose-project.tsx";
import MainComponents from "./alisher/main-components.tsx";
import QrCreate from "./alisher/qr-create.tsx";
import PaymentProcess from "./alisher/payment-process.tsx";
import TransactionManagement from "./alisher/transaction-management.tsx";
import NotificationsNotices from "./alisher/notifications-notices.tsx";
import ReportsAnalysis from "./alisher/reports-analysis.tsx";
import SubscriptionPayments from "./alisher/subscription-payments.tsx";
import ProgramsCashback from "./alisher/programs-cashback.tsx";
import IntegrationSystems from "./alisher/integration-systems.tsx";
import LocationPayment from "./alisher/location-payment.tsx";
import Networks from "./alisher/networks.tsx";
import CrossOpportunities from "./alisher/cross-opportunities.tsx";
import ControlVoice from "./alisher/control-voice.tsx";
import Server from "./omadbek/Server.tsx";
import Mobile from "./omadbek/mobile.tsx";
import WebSayt from "./omadbek/WebSayt.tsx";
import TelegramBot from "./omadbek/TelegramBot.tsx";
import SuniyIntelekt from "./omadbek/suniyIntelekt.tsx";
import XavfSizlik from "./omadbek/xavfsizlik.tsx";
import Lenguage from "./omadbek/Lenguage.tsx";
import Quvvatlash from "./omadbek/quvvatlash.tsx";
import Tizim from "./omadbek/Tizim.tsx";
import Yangilash from "./omadbek/Yangilash.tsx";
import Hisob from "./omadbek/Hisob.tsx";
import Statistik from "./omadbek/statistik.tsx";
import Hamkorlik from "./omadbek/Hamkorlik.tsx";
import Kassa from "./omadbek/Kassa.tsx";
import Kelajak from "./omadbek/Kelajek.tsx";

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    }
};

const Home = () => {
    return (
        <div>
            <QrMain/>
            <PurposeProject/>
            <MainComponents/>
            <QrCreate/>
            <PaymentProcess/>
            <TransactionManagement/>
            <NotificationsNotices/>
            <ReportsAnalysis/>
            <SubscriptionPayments/>
            <ProgramsCashback/>
            <IntegrationSystems/>
            <LocationPayment/>
            <Networks/>
            <CrossOpportunities/>
            <ControlVoice/>

            <div className={'mt-16'}>
                <Server/>
            </div>
            <div className="mt-10">
                <Mobile/>
            </div>
            <WebSayt/>
            <TelegramBot/>
            <SuniyIntelekt/>
            <XavfSizlik/>
            <div className="mt-10">
                <Lenguage/>
            </div>
            <div className="mt-12">
                <Quvvatlash/>
            </div>
            <div className="mt-12">
                <Tizim/>
            </div>
            <div className="mt-12">
                <Yangilash/>
            </div>
            <div className="mt-20">
                <Hisob/>
            </div>
            <div className="mt-20">
                <Statistik/>
            </div>
            <div className="mt-40">
                <Hamkorlik/>
            </div>
            <div className="mt-44">
                <Kassa/>
            </div>
            <div className="mt-44">
                <Kelajak/>
            </div>
        </div>
    );
};

export default Home;
