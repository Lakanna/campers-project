import { Suspense, lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation.jsx';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors.js';

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
  const theme = useSelector(selectTheme);

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
  }, [theme]);
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
