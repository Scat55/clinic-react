import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home';
import Cabinet from '@/pages/Cabinet';
import ErrorPage from '@/pages/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [],
    errorElement: <ErrorPage />,
  },
  {
    path: '/cabinet',
    element: <Cabinet />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
