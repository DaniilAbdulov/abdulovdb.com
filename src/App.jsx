import { useEffect, useState } from "react";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MyPreloader } from "./components/MyPreloader";
import { NavBar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

export const App = () => {
    const [load, upadateLoad] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);
    return (
        <BrowserRouter>
            <MyPreloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <NavBar />
                <ScrollToTop />
                <Router />
                <Footer />
            </div>
        </BrowserRouter>
    );
};
