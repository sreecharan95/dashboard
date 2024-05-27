import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Analytics from './pages/Analytics';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/overview" element={<Overview/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/" element={<Navigate to="/overview" /> }/>
      </Routes>
    </Router>
  );
};

export default App;
