import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header/Header';
import 'react-datepicker/dist/react-datepicker.css';




const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const CamperDetails = lazy(() => import('./pages/CamperDetails/CamperDetails'));

function App() {
    return (
        <div>
            <>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/catalog" element={<Catalog />}/>
                <Route path="/catalog/:id" element={<CamperDetails />}/>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
        </>
        </div>
    )
}

export default App;