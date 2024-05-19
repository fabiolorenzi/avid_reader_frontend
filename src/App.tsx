import React from "react";
import {Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Favorites from "./pages/Favorites/Favorites";
import EditFavorite from "./pages/EditFavorite/EditFavorite";
import SignIn from "./pages/SignIn/SignIn";

function App() {
    return(
        <div className="app">
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/edit-favorite" element={<EditFavorite />} />
            </Routes>
        </div>
    );
};

export default App;