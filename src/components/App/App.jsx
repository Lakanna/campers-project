import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation.jsx';
import { ToastContainer } from 'react-toastify';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx'),
);
const CatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage.jsx'),
);
const CamperDetailsPage = lazy(() =>
  import('../../pages/CamperDetailsPage/CamperDetailsPage.jsx'),
);

function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </>
  );
}

export default App;
