import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {qrRoutes} from "./helpers/routes.tsx";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";

const App = () => {
    useEffect(() => {
        setTimeout(() => {
            console.clear()
        }, 10000)
    }, []);

    return (
        <>
            <Navbar/>
            <Routes>
                {qrRoutes.map(({path, component}) => (
                    <Route path={path} element={component}/>
                ))}
            </Routes>
            <Footer/>
        </>
    );
};

export default App;
