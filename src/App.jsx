import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <div className="container">
                <Outlet></Outlet>
            </div>
            <div className="bg-gray-900">
                <Footer></Footer>
            </div>
        </div>
    );
}

export default App;
