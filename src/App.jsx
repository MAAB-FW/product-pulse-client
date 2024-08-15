import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default App;
