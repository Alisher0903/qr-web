


import {Server, QrMain, PurposeProject, MainComponents,Mobile, WebSayt} from "./pages";

const App = () => {
    return (
        <div>
            <QrMain/>
            <PurposeProject/>
            <MainComponents/>

            <Server/>
            <div className="mt-10">
            <Mobile/>
            </div>
            <WebSayt/>
        </div>
    );
};

export default App;
