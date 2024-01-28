import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <p style={{ textAlign: 'center', paddingTop: 65 }}>...Loading page</p>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
