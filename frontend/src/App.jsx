import React from "react";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard"

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default App;