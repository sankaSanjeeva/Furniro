import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Root } from '@/common/components';

export default createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <div />,
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
