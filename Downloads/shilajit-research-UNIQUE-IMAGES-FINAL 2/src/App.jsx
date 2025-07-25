import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import HomePage from './components/HomePage';
import ResinPage from './components/ResinPage';
import CapsulesPage from './components/CapsulesPage';
import GummiesPage from './components/GummiesPage';
import ArticlesPage from './components/ArticlesPage';
import FAQPage from './components/FAQPage';
import ComparisonPage from './components/ComparisonPage';
import SitemapPage from './components/SitemapPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resin" element={<ResinPage />} />
          <Route path="/capsules" element={<CapsulesPage />} />
          <Route path="/gummies" element={<GummiesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;

