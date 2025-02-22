import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/home';
import Personal from './pages/persional';
import Layout from './components/layout';
import Point from './pages/point';
import Schedule from './pages/schedule';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/persional' element={<Personal />} />
                    <Route path='/point' element={<Point />} />
                    <Route path='/schedule' element={<Schedule />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>
);
