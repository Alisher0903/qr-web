import {Server, QrMain, PurposeProject, MainComponents, Mobile, WebSayt, QrCreate, PaymentProcess} from "./pages";
import SuniyIntelekt from "./pages/omadbek/suniyIntelekt";
import XavfSizlik from "./pages/omadbek/xavfsizlik";

const App = () => {
    return (
        <div>
            <QrMain/>
            <PurposeProject/>
            <MainComponents/>
            <QrCreate/>
            <PaymentProcess/>

            <Server/>
            <div className="mt-10">
                <Mobile/>
            </div>
            <WebSayt/>
            <SuniyIntelekt/>
            <XavfSizlik/>
        </div>
    );
};

export default App;
