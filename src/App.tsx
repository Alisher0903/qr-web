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
            <SuniyIntelekt/>
            <XavfSizlik/>
            <div className="mt-10">
                <Lenguage/>
            </div>

        </div>
    );
};

export default App;
