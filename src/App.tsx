import {
    Server,
    QrMain,
    PurposeProject,
    MainComponents,
    Mobile,
    WebSayt,
    QrCreate,
    PaymentProcess,
    TransactionManagement,
    SuniyIntelekt,
    Lenguage,
    XavfSizlik,
    NotificationsNotices,
    ReportsAnalysis,
    SubscriptionPayments,
    Quvvatlash,
    TelegramBot,
    ProgramsCashback,
    IntegrationSystems,
    LocationPayment,
    Networks,
    CrossOpportunities,
    ControlVoice,
    Hisob,
    Kassa,
    Tizim,
    Yangilash,
    Hamkorlik,
    Kelajak,
    Statistik
} from "./pages";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            console.clear()
        }, 10000)
    }, []);

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

export default App;
