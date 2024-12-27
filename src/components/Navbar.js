import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-white shadow">
            <div className="container mx-auto p-4 flex justify-between">
                <h1 className="text-lg font-bold">Website</h1>
                <div className="flex gap-4">
                    <Link to="/" className="text-gray-700 hover:text-blue-500">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-500">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
