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

            <Server/>
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

        </div>
    );
};

export default App;
