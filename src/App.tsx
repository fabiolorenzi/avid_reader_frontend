import React from "react";
import {Routes, Route} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";

function App() {
    return(
        <div className="app">
            <Routes>
                <Route path="/" element={<SignIn />} />
            </Routes>
        </div>
    );
};

export default App;