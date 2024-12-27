import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <Router>
            <div>
                {/* Navbar แสดงทุกหน้า */}
                <Navbar />

                {/* กำหนดเส้นทางแต่ละหน้า */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
