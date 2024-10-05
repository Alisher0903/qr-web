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
    XavfSizlik
} from "./pages";
import Quvvatlash from "./pages/omadbek/quvvatlash";
import TelegramBot from "./pages/omadbek/TelegramBot";

const App = () => {
    return (
        <div>
            <QrMain/>
            <PurposeProject/>
            <MainComponents/>
            <QrCreate/>
            <PaymentProcess/>
            <TransactionManagement/>

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
