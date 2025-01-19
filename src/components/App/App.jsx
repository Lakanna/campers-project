import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage.jsx';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx';
import CatalogPage from '../../pages/CatalogPage/CatalogPage.jsx';
import CamperDetailsPage from '../../pages/CamperDetailsPage/CamperDetailsPage.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
