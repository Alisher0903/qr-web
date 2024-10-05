import {Server,QrMain, Mobile, WebSayt} from "./pages";

const App = () => {
    return (
        <div>
            <QrMain/>
            <Server/>
            <div className="mt-10">
            <Mobile/>
            </div>
            <WebSayt/>
        </div>
    );
};

export default App;
