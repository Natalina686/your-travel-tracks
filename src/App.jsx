import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Catalog from './pages/Catalog/Catalog';
import CamperDetails from './pages/CamperDetails/CamperDetails';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/catalog" element={<Catalog />}/>
                <Route path="/catalog/:id" element={<CamperDetails />}/>
            </Routes>
        </Router>
    )
}

export default App;