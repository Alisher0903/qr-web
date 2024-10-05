import {Server, QrMain, PurposeProject, MainComponents,Mobile, WebSayt,QrCreate} from "./pages";

const App = () => {
    return (
        <div>
            <QrMain/>
            <PurposeProject/>
            <MainComponents/>
            <QrCreate/>

            <Server/>
            <div className="mt-10">
            <Mobile/>
            </div>
            <WebSayt/>
        </div>
    );
};

export default App;
