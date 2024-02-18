import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, Root } from '@/common/components';
import { Comparison, Home, Product, Shop } from './pages';
import Cart from './pages/cart';

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
        children: [
          {
            index: true,
            element: <Shop />,
          },
          {
            path: 'comparison',
            element: <Comparison />,
          },
          {
            path: 'cart',
            children: [
              {
                index: true,
                element: <Cart />,
              },
              {
                path: 'checkout',
                element: <div />,
              },
            ],
          },
          {
            path: ':productId',
            element: <Product />,
          },
        ],
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
