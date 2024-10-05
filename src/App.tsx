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
    IntegrationSystems
} from "./pages";
import Hamkorlik from "./pages/omadbek/Hamkorlik";
import Kassa from "./pages/omadbek/Kassa";
import Kelajek from "./pages/omadbek/Kelajek";
import Statistik from "./pages/omadbek/statistik";
import Tizim from "./pages/omadbek/Tizim";
import Yangilash from "./pages/omadbek/Yangilash";


const App = () => {
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

            <Server />
            <div className="mt-10">
                <Mobile />
            </div>
            <WebSayt />
            <TelegramBot />
            <SuniyIntelekt />
            <XavfSizlik />
            <div className="mt-10">
                <Lenguage />
            </div>
            <div className="mt-12">
                <Quvvatlash />
            </div>
            <div className="mt-12">
                <Tizim />
            </div >
            <div className="mt-12">
                <Yangilash />
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
                <Kelajek/>
            </div>

        </div>
    );
};

export default App;
