import {Server, QrMain, PurposeProject, MainComponents} from "./pages";

const App = () => {
    return (
        <div>
            <QrMain/>
            <PurposeProject/>
            <MainComponents/>

            <Server/>
        </div>
    );
};

export default App;
