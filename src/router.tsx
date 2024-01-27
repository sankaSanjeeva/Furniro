import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Root } from '@/common/components';
import { Home } from './pages';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shop',
        element: <div />,
      },
      {
        path: 'about',
        element: <div />,
      },
      {
        path: 'contact',
        element: <div />,
      },
    ],
  },
]);
