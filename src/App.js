import './App.css';
import {Route, Routes} from "react-router-dom";
import {Redirect} from "./pages/Redirect";
import {MainPage} from "./pages/MainPage";


function App() {
    return (
        <>
            <Routes>
                <Route path='' element={<MainPage/>} />
                <Route path='*' element={<Redirect/>}/>
            </Routes>

        </>
    );
}

export default App;