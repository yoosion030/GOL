import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Middleware = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const refreshToken = window.localStorage.getItem('refreshToken');
    const accessToken = window.localStorage.getItem('accessToken');

    if (!refreshToken && !accessToken && router.pathname !== '/gauth/code') {
      router.push('/gauth');
    } else if (refreshToken && accessToken && router.pathname === '/gauth') {
      router.push('/info');
    }
  }, []);

  return <>{children}</>;
};

export default Middleware;
