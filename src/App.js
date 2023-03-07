import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderanPage from './pages/OrderanPage';
import HistoryPage from './pages/HistoryPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/orderan" element={<OrderanPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </>
  );
}

export default App;
