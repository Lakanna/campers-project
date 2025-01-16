import { Suspense } from 'react';

import { Header } from '../Header/Header.jsx';

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
